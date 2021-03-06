# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: manga_plus.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("manga_plus.proto", :syntax => :proto3) do
    add_message "manga_plus.Chapter" do
      optional :titleId, :uint32, 1
      optional :chapterId, :uint32, 2
      optional :name, :string, 3
      optional :subTitle, :string, 4
      optional :thumbnailUrl, :string, 5
      optional :startTimeStamp, :uint32, 6
      optional :endTimeStamp, :uint32, 7
      optional :alreadyViewed, :bool, 8
      optional :isVerticalOnly, :bool, 9
    end
    add_message "manga_plus.LastPage" do
      optional :currentChapter, :message, 1, "manga_plus.Chapter"
      optional :nextChapter, :message, 2, "manga_plus.Chapter"
      optional :isSubscribed, :bool, 4
      optional :nextTimeStamp, :uint32, 5
      optional :chapterType, :int32, 6
    end
    add_message "manga_plus.MangaPage" do
      optional :imageUrl, :string, 1
      optional :width, :uint32, 2
      optional :height, :uint32, 3
      optional :type, :enum, 4, "manga_plus.MangaPage.Type"
      optional :encryptionKey, :string, 5
    end
    add_enum "manga_plus.MangaPage.Type" do
      value :SINGLE, 0
      value :LEFT, 1
      value :RIGHT, 2
      value :DOUBLE, 3
    end
    add_message "manga_plus.Page" do
      optional :mangaPage, :message, 1, "manga_plus.MangaPage"
    end
    add_message "manga_plus.MangaViewer" do
      repeated :pages, :message, 1, "manga_plus.Page"
      optional :chapterId, :uint32, 2
      repeated :chapters, :message, 3, "manga_plus.Chapter"
      optional :sns, :message, 4, "manga_plus.Sns"
      optional :titleName, :string, 5
      optional :chapterName, :string, 6
      optional :numberOfComments, :uint32, 7
      optional :isVerticalOnly, :bool, 8
      optional :titleId, :uint32, 9
      optional :startFromRight, :bool, 10
    end
    add_message "manga_plus.TitleDetailView" do
      optional :title, :message, 1, "manga_plus.Title"
      optional :titleImageUrl, :string, 2
      optional :overview, :string, 3
      optional :backgroundImageUrl, :string, 4
      optional :nextTimeStamp, :uint32, 5
      optional :updateTiming, :enum, 6, "manga_plus.TitleDetailView.UpdateTiming"
      optional :viewingPeriodDescription, :string, 7
      optional :nonAppearanceInfo, :string, 8
      repeated :firstChapterList, :message, 9, "manga_plus.Chapter"
      repeated :lastChapterList, :message, 10, "manga_plus.Chapter"
      repeated :recommendedTitleList, :message, 12, "manga_plus.Title"
      optional :sns, :message, 13, "manga_plus.Sns"
      optional :isSimulReleased, :bool, 14
      optional :isSubscribed, :bool, 15
      optional :rating, :enum, 16, "manga_plus.TitleDetailView.Rating"
      optional :chaptersDescending, :bool, 17
      optional :numberOfViews, :uint32, 18
    end
    add_enum "manga_plus.TitleDetailView.UpdateTiming" do
      value :NOT_REGULARLY, 0
      value :MONDAY, 1
      value :TUESDAY, 2
      value :WEDNESDAY, 3
      value :THURSDAY, 4
      value :FRIDAY, 5
      value :SATURDAY, 6
      value :SUNDAY, 7
      value :DAY, 8
    end
    add_enum "manga_plus.TitleDetailView.Rating" do
      value :ALLAGE, 0
      value :TEEN, 1
      value :TEENPLUS, 2
      value :MATURE, 3
    end
    add_message "manga_plus.Title" do
      optional :titleId, :uint32, 1
      optional :name, :string, 2
      optional :author, :string, 3
      optional :portraitImageUrl, :string, 4
      optional :landscapeImageUrl, :string, 5
      optional :viewCount, :uint32, 6
      optional :language, :enum, 7, "manga_plus.Title.Language"
    end
    add_enum "manga_plus.Title.Language" do
      value :ENGLISH, 0
      value :SPANISH, 1
    end
    add_message "manga_plus.Sns" do
      optional :body, :string, 1
      optional :url, :string, 2
    end
    add_message "manga_plus.SuccessResult" do
      optional :allTitlesView, :message, 5, "manga_plus.AllTitlesView"
      optional :titleDetailView, :message, 8, "manga_plus.TitleDetailView"
      optional :mangaViewer, :message, 10, "manga_plus.MangaViewer"
      optional :webHomeView, :message, 11, "manga_plus.WebHomeView"
    end
    add_message "manga_plus.Response" do
      optional :success, :message, 1, "manga_plus.SuccessResult"
    end
    add_message "manga_plus.AllTitlesView" do
      repeated :titles, :message, 1, "manga_plus.Title"
    end
    add_message "manga_plus.WebHomeView" do
      repeated :updatedTitleGroup, :message, 2, "manga_plus.UpdatedTitleGroup"
      repeated :title, :message, 3, "manga_plus.Title"
    end
    add_message "manga_plus.UpdatedTitleGroup" do
      optional :groupName, :string, 1
      repeated :title, :message, 2, "manga_plus.UpdatedTitle"
    end
    add_message "manga_plus.UpdatedTitle" do
      optional :title, :message, 1, "manga_plus.Title"
      optional :chapterId, :uint32, 2
      optional :chapterName, :string, 3
      optional :chapterSubTitle, :string, 4
      optional :isLatest, :bool, 5
      optional :isVerticalOnly, :bool, 6
    end
  end
end

module MangaPlus
  Chapter = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.Chapter").msgclass
  LastPage = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.LastPage").msgclass
  MangaPage = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.MangaPage").msgclass
  MangaPage::Type = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.MangaPage.Type").enummodule
  Page = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.Page").msgclass
  MangaViewer = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.MangaViewer").msgclass
  TitleDetailView = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.TitleDetailView").msgclass
  TitleDetailView::UpdateTiming = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.TitleDetailView.UpdateTiming").enummodule
  TitleDetailView::Rating = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.TitleDetailView.Rating").enummodule
  Title = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.Title").msgclass
  Title::Language = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.Title.Language").enummodule
  Sns = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.Sns").msgclass
  SuccessResult = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.SuccessResult").msgclass
  Response = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.Response").msgclass
  AllTitlesView = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.AllTitlesView").msgclass
  WebHomeView = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.WebHomeView").msgclass
  UpdatedTitleGroup = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.UpdatedTitleGroup").msgclass
  UpdatedTitle = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("manga_plus.UpdatedTitle").msgclass
end
