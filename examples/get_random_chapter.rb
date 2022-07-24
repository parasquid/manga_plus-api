#!/usr/bin/env ruby

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
