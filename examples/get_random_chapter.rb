#!/usr/bin/env ruby

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
Dir.mkdir folder unless Dir.exists?(folder); Dir.chdir folder

manga[:pages].compact.each_with_index do |page, index|
  next unless page[:mangaPage]

  filename = "#{(index + 1).to_s.rjust(3, '0')}"
  key = page[:mangaPage][:encryptionKey]
  type = page[:mangaPage][:type]

  image = HTTParty.get(page[:mangaPage][:imageUrl]).body
  decoded_image = Utils.decode(image, encryption_key: key)

  File.open(filename + " [#{type}]" + ".jpg", 'wb') do |file|
    file.write(decoded_image.pack("C*"))
  end
end
