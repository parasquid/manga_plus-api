# MangaPlus::Api

Thin API layer for the MangaPlus manga site
## Installation

Add this line to your application's Gemfile:

```ruby
gem 'manga_plus-api'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install manga_plus-api

## Usage

``` ruby
# frozen_string_literal: true

require 'bundler/setup'
require 'manga_plus/api'

all = MangaPlus::Api::AllTitlesView.new
title_id = all.call[:titles].sample[:titleId]

title = MangaPlus::Api::TitleDetailView.new(title_id)
chapter_id = title.call[:firstChapterList].first[:chapterId]

manga = MangaPlus::Api::MangaViewer.new(chapter_id)
pages = manga.call[:mangaViewer][:pages].map do |page|
  if page[:mangaPage]
    [ page[:mangaPage][:imageUrl], page[:mangaPage][:encryptionKey] ]
  end
end.compact

puts pages
```

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/parasquid/manga_plus-api
