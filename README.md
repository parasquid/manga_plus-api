# MangaPlus::Api

Thin API layer for the MangaPlus manga site. Note that this is intended for programmatically navigating their api.

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

include MangaPlus::Api

all_titles_view = AllTitlesView.new
title_id = all_titles_view.call[:titles]
                          .select { |title| title[:language] == :ENGLISH }
                          .sample[:titleId]

title_detail_view = TitleDetailView.new(title_id)
chapter_id = title_detail_view.call[:firstChapterList].first[:chapterId]

manga_viewer = MangaViewer.new(chapter_id)
manga = manga_viewer.call

folder = "#{manga[:titleName]} #{manga[:chapterName]} - #{chapter_id}"
Dir.mkdir folder unless Dir.exist?(folder)
Dir.chdir folder

manga[:pages].compact.each_with_index do |page, index|
  next unless page[:mangaPage]

  filename = (index + 1).to_s.rjust(3, '0')
  key = page[:mangaPage][:encryptionKey]
  type = page[:mangaPage][:type]

  image = HTTParty.get(page[:mangaPage][:imageUrl]).body
  decoded_image = Utils.decode(image, encryption_key: key)

  fullname = "#{filename} [#{type}].jpg"
  File.open(fullname, 'wb') do |file|
    file.write(decoded_image.pack('C*'))
  end
end

```

This is also available in the `examples/get_random_chapter.rb` in the repository. If you have docker and docker-compose installed, you can run:

``` bash
docker compose run ruby bundle
docker compose run ruby examples/get_random_chapter.rb
```

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at <https://github.com/parasquid/manga_plus-api/issues>

## License

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
