# frozen_string_literal: true

# Copyright 2020 parasquid

# This file is part of manga_plus-api.

# manga_plus-api is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.

# manga_plus-api is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.

# You should have received a copy of the GNU General Public License
# along with manga_plus-api.  If not, see <https://www.gnu.org/licenses/>.

require 'manga_plus/api/version'

require_relative './proto/manga_plus_pb.rb'
require 'httparty'

module MangaPlus
  module Api
    class Error < StandardError; end
    module Utils
      def self.decode(image, encryption_key:)
        key = [encryption_key].pack('H*')
        key_size = key.bytes.size
        image.bytes.map.with_index { |e, i| e ^ key.bytes[i % key_size] }
      end
    end

    API = 'https://jumpg-webapi.tokyo-cdn.com/api'

    class AllTitlesView
      URL = API + '/title_list/all'
      def call
        protobuf = HTTParty.get(URL).body
        response = MangaPlus::Response.decode(protobuf).to_h
        response.dig(:success, :allTitlesView)
      end
    end

    class TitleDetailView
      URL = API + '/title_detail?title_id=%s'
      def initialize(title_id)
        @title_id = title_id
      end

      def call
        protobuf = HTTParty.get(URL % @title_id).body
        response = MangaPlus::Response.decode(protobuf).to_h
        response.dig(:success, :titleDetailView)
      end
    end

    class MangaViewer
      OPTIONS = 'chapter_id=%<chapter_id>s&split=%<split>s&img_quality=%<img_quality>s'
      URL = API + '/manga_viewer?' + OPTIONS

      def initialize(chapter_id, split: 'yes', img_quality: 'super_high')
        @options = {
          chapter_id: chapter_id,
          split: split,
          img_quality: img_quality
        }
      end

      def call
        protobuf = HTTParty.get(URL % @options).body
        response = MangaPlus::Response.decode(protobuf).to_h
        response.dig(:success, :mangaViewer)
      end
    end

    class WebHomeView
      OPTIONS = "?lang=%<language>s"
      URL = API + '/web/web_home' + OPTIONS

      def initialize(language: 'eng')
        @options = { language: language }
      end

      def call
        protobuf = HTTParty.get(URL % @options).body
        response = MangaPlus::Response.decode(protobuf).to_h
        response.dig(:success, :webHomeView)
      end
    end
  end
end
