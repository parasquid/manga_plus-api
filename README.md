# MangaPlus::Api

Thin API layer for the MangaPlus manga site

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'manga_plus-api'
```

And then execute:

``` bash
bundle
```

Or install it yourself as:

``` bash
gem install manga_plus-api
```

## Usage

This sample application will get a random title from the list of titles available, choose the first chapter, and download all the pages for that chapter (decrypting the images).

``` ruby
# frozen_string_literal: true

require 'bundler/setup'
require 'manga_plus/api'

all_api = MangaPlus::Api::AllTitlesView.new
title_id = all_api.call[:titles].sample[:titleId]

title_api = MangaPlus::Api::TitleDetailView.new(title_id)
chapter_id = title_api.call[:firstChapterList].first[:chapterId]

manga_api = MangaPlus::Api::MangaViewer.new(chapter_id)
manga = manga_api.call

folder = "#{manga[:titleName]} #{manga[:chapterName]} - #{chapter_id}"
Dir.mkdir folder unless Dir.exists?(folder); Dir.chdir folder

manga[:pages].compact.each_with_index do |page, index|
  next unless page[:mangaPage]

  filename = "#{(index + 1).to_s.rjust(3, '0')}"
  key = page[:mangaPage][:encryptionKey]
  type = page[:mangaPage][:type]

  image = HTTParty.get(page[:mangaPage][:imageUrl]).body
  decoded_image = MangaPlus::Api::Utils.decode(image, encryption_key: key)

  File.open(filename + " [#{type}]" + ".jpg", 'wb') do |file|
    file.write(decoded_image.pack("C*"))
  end
end
```

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/parasquid/manga_plus-api
