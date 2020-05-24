# frozen_string_literal: true

require 'manga_plus/api/version'

require_relative './proto/manga_plus_pb.rb'
require 'httparty'

module MangaPlus
  module Api
    class Error < StandardError; end

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

      def initialize(chapter_id, split: 'yes', img_quality: 'high')
        @options = {
          chapter_id: chapter_id,
          split: split,
          img_quality: img_quality
        }
      end

      def call
        protobuf = HTTParty.get(URL % @options).body
        response = MangaPlus::Response.decode(protobuf).to_h
        response.dig(:success)
      end
    end
  end
end
