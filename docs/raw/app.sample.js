(function (e) {
  function t(t) {
    for (
      var a, o, s = t[0], l = t[1], c = t[2], d = 0, p = [];
      d < s.length;
      d++
    )
      (o = s[d]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]),
        (i[o] = 0);
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
    u && u(t);
    while (p.length) p.shift()();
    return r.push.apply(r, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], a = !0, s = 1; s < n.length; s++) {
        var l = n[s];
        0 !== i[l] && (a = !1);
      }
      a && (r.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var a = {},
    i = { app: 0 },
    r = [];
  function o(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = a),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          o.d(
            n,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "/");
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var u = l;
  r.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("cd49");
  },
  "00df": function (e, t, n) {
    e.exports = {
      wrapper: "BannerList-module_wrapper_3nK2F",
      bannerContainer: "BannerList-module_bannerContainer_b0gw5",
      banner: "BannerList-module_banner_2U34h",
      container: "BannerList-module_container_3lDbU",
      publisherName: "BannerList-module_publisherName_T0SOg",
      publisherNews: "BannerList-module_publisherNews_2Uyyf",
      news_main: "BannerList-module_news_main_1hZgt",
      news_subject: "BannerList-module_news_subject_2saPr",
      news_date: "BannerList-module_news_date_OK8C8",
      news_description: "BannerList-module_news_description_1B0xr",
      news_checkNow: "BannerList-module_news_checkNow_1d-f1",
      news_showAll: "BannerList-module_news_showAll_g2fXf",
    };
  },
  "01aa": function (e, t, n) {
    e.exports = {
      searchContainer: "styles-module_searchContainer_2bS4N",
      iconGrey: "styles-module_iconGrey_fxz6T",
      iconWhite: "styles-module_iconWhite_Skhzp",
      input: "styles-module_input_3eikl",
      searchForm: "styles-module_searchForm_2Nk3-",
      iconWhiteContainer: "styles-module_iconWhiteContainer_1WjuI",
    };
  },
  "01c3": function (e, t, n) {
    e.exports = n.p + "img/about_us_eng.c76667c2.jpg";
  },
  "034f": function (e, t, n) {
    "use strict";
    var a = n("85ec"),
      i = n.n(a);
    i.a;
  },
  "04ef": function (e, t, n) {
    e.exports = { text: "styles-module_text_1mS86" };
  },
  "0b2a": function (e, t, n) {
    e.exports = n.p + "img/icon_close_white.cd41e1bb.svg";
  },
  1: function (e, t) {},
  "10b2": function (e, t, n) {
    e.exports = n.p + "img/top_narrow.070ec0dc.png";
  },
  1406: function (e, t, n) {
    e.exports = {
      container: "RecommendList-module_container_ZUxHH",
      header: "RecommendList-module_header_2Koo9",
      fitImage: "RecommendList-module_fitImage_1vAiD",
      title: "RecommendList-module_title_3NIE9",
      item: "RecommendList-module_item_1toTC",
    };
  },
  "16f4": function (e, t, n) {
    e.exports = n.p + "img/404.6ac245e6.png";
  },
  "19d0": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAkFBMVEUAAAD//wD/2QD/1wD/1wD/1wD/1wD/5wD/1gD/2QD//wD/1wD/1wD/1wD/1wD/5wD/1wD/1wD/1wD/1gD/1wD/1wD/1wD/2AD/1wD/1wD/1wD/2AD/2QD/1wD/2AD/1wD/3gD/1wD/1gD/1wD/2AD/3AD/1wD/1wD/1gD/1wD/2QD/2AD/2gD/1gD/1gD/1gAcB5WTAAAAL3RSTlMAAkns05rmCvofBLefroUH4NzYwqumcj/xsnhiNY1PLA9+OM46F/fAvJdEaSnDaqCfa58AAAJSSURBVEjHlZdpg6IwDIZbbvDkRsR71Nmd2e3//3dDGjsdKLTTfFCKPJqkb9JIZs1hLHK3uV91lFgYgMKa4pjYgdLcNrQDpQV7agN6rkQ9xwJ0yN1ZbwW6phZgb7RePpBchTYgWLx6uRtbgWB/M0xvbAuSEH/UC21BQtcYJ7UDwT4wt/JGfZoA37ze3ob3DmzwbZs0uvxOjHTBwxTOtv3i9tlfdHlW6ckzz+0eF/cGFr1TSdC//9GTNdctZvYC1yXsMmNA6rO2g2da7jdI8RHDVcpJX0ueuAwSkfYl+hExvtCSS3jk2F8UGKHw2khe4YmCEOpCgkW635EsNSSFFDaUfA7EcA+QLDT76sMDHdmPioChrRK9FiuM9SxvX17kbjMHbiJIPYGosp8hPI0k7FpObvz1h91Ff1rMkSDYLQkgIFgqYbL3mZotQQLkwR0e2FqQz81sWiMSqcKm/wRZaUCXK3xosQjzpnF1C2mYa/+pJjn55OeHl2g128EdVpKQPLGJagRQoeQU8nILylgnuY5xXjGjyGkDTUQpI3NZYSFfzcC4kMlxOn3m1pHw3VZ6ublZkZYXkQlQ2yMJebuoTYTakLF7ZGcDoh4BhHq8bqndoSM1fdAy6jEnS/fDxP0fH6yErvA3qdbPw8RRHnrYn86avCzk8KAWfVbP7kOGI51SMbH3aqenSb3slAFpNMeAbq90FNx1yXQjGf1ui4HvbL7r3fED4xDoeExYlC5K3y8XafSrsZPuAybNatANWznaWo7WybFoJGE3zNOu8vOtG+n+PnwBGJ2IhrwWd+8AAAAASUVORK5CYII=";
  },
  "1c78": function (e, t, n) {
    e.exports = {
      container: "styles-module_container_10L4A",
      img: "styles-module_img_1RSLp",
    };
  },
  "1fc0": function (e, t, n) {
    e.exports = {
      languageSettingBtn: "styles-module_languageSettingBtn_1MrGF",
      text: "styles-module_text_NZjpR",
    };
  },
  2: function (e, t) {},
  2332: function (e, t, n) {
    e.exports = {
      container: "index-module_container_2vEap",
      banner: "index-module_banner_1f13D",
    };
  },
  "2a28": function (e, t, n) {
    e.exports = {
      searchContainer: "styles-module_searchContainer_3ncHG",
      icon: "styles-module_icon_2BPdA",
      button_background: "styles-module_button_background_3117u",
      searchForm: "styles-module_searchForm_2eVUa",
      divider: "styles-module_divider_2EYj5",
      resultName: "styles-module_resultName_2EzE8",
      nothingMatched: "styles-module_nothingMatched_2sf-W",
      allTitles: "styles-module_allTitles_2Mr3b",
    };
  },
  "2b85": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAwCAMAAABUpcipAAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMA+xD0Ar1cBdigUO3p497VxcCmjjoiz7m1gHtwQj0eDdnJh1hINCokGgqtp5hiSzAtFLeXdlkbFUkAAAGrSURBVDjLjZPpdoIwEEYTAggogoLaivu+1K3tvP+rtYQkJCMcuP/m8x4TZiakhuBE2jEPD+3EM+3O25ljYPtW4hCgd2wjTgGg3+aLAvhnYDeLD8j5bBYXXKTNn74ETngmiNETBRQqD+/EMxRAAVuY+Sfc8B0FQyNOKVxN0QWJPnTbA2AvQ/xQ4peWbnFA9qBglr4BOa7WHA9KflW8Aw7N5MROY9CIlDiQ0Xi7zFs6ZWAwEt4BSmgYdQGTCTGDBhzcCYy8Eu0Uw2I13qXTg4IHF2c1nt9RZ7lizFWEd/4eChLxjN7pZ0v9sG8urt+sn53o/Egka16FhhVNtUdqiXDFK73B3XvlmvdEofAWxET0h/JCa+OcIPpi03ixUt6VYJh+x4ESb9h7yVnyylfiHotbOST0jEZYvBgjtKgUZ8h7il+oeDWOFDemZztoHwPVbssQNzIPZBLLZFjpxSpKQZnqP4/l3qdEkaiw557zpd/55WAT/doTUFBv3adQMrGJhhVBDZFFDKxJtTcRXomdVHkJPxeRxliLU1JN4NDSok5A6rFc3/EY8xzfRZf7A65Eo7A9rgunAAAAAElFTkSuQmCC";
  },
  "2c12": function (e, t, n) {
    e.exports = {
      commentItem: "CommentItem-module_commentItem_MvMgs",
      wrapper: "CommentItem-module_wrapper_3PmOK",
      icon: "CommentItem-module_icon_2MbYw",
      userName: "CommentItem-module_userName_1vLNi",
      body: "CommentItem-module_body_8LyBg",
      date: "CommentItem-module_date_3FMXp",
      like: "CommentItem-module_like_1u_7h",
      likeText: "CommentItem-module_likeText_38Im_",
      likeIcon: "CommentItem-module_likeIcon_3ILAP",
      likeBtn: "CommentItem-module_likeBtn_1UuyF",
      numberOfLikes: "CommentItem-module_numberOfLikes_3q-S0",
    };
  },
  "2e6e": function (e, t, n) {
    e.exports = {
      sideMenu: "SideMenu-module_sideMenu_3ffJA",
      modal: "SideMenu-module_modal_ilcbL",
      chapterList: "SideMenu-module_chapterList_2K4-E",
      chapter: "SideMenu-module_chapter_2tPvv",
      appear: "SideMenu-module_appear_3Eu1G",
      hidden: "SideMenu-module_hidden_338ZK",
      routerActive: "SideMenu-module_routerActive_3_co7",
    };
  },
  "2f51": function (e, t, n) {
    e.exports = { textarea: "styles-module_textarea_3K1Ap" };
  },
  3068: function (e, t, n) {
    e.exports = {
      container: "styles-module_container_1h4NA",
      image: "styles-module_image_mS3ok",
      yellow: "styles-module_yellow_3JEL3",
      body: "styles-module_body_3bClK",
      message: "styles-module_message_WagEa",
      btn: "styles-module_btn_2LWvg",
    };
  },
  "34ae": function (e, t, n) {
    e.exports = n.p + "img/AppStoreIcon.2928664f.svg";
  },
  "35e3": function (e, t, n) {
    e.exports = {
      container: "styles-module_container_2s5eX",
      wrapper: "styles-module_wrapper_2SYcN",
      title: "styles-module_title_3K1kj",
      titleWithShown: "styles-module_titleWithShown_MRUCP",
      titleNoCheck: "styles-module_titleNoCheck_38Tj_",
      titleText: "styles-module_titleText_1HL1P",
      titleChecked: "styles-module_titleChecked_3_1Hw",
      item: "styles-module_item_2Q1Ev",
      border: "styles-module_border_1FdMM",
    };
  },
  "35f6": function (e, t, n) {
    e.exports = {
      titleBox: "styles-module_titleBox_3niQm",
      titleNoCheck: "styles-module_titleNoCheck_Snhkr",
      titleChecked: "styles-module_titleChecked_1CQfA",
      titleText: "styles-module_titleText_2zpTn",
      arrow: "styles-module_arrow_3HkQf",
      fadeEnterActive: "styles-module_fadeEnterActive_1yyn4",
      in: "styles-module_in_1j-c5",
      fadeLeaveActive: "styles-module_fadeLeaveActive_2Ry5x",
      out: "styles-module_out_if2nB",
    };
  },
  "3a09": function (e, t, n) {
    e.exports = {
      modal: "ModalBanner-module_modal_23c5H",
      banner: "ModalBanner-module_banner_bTno_",
      bannerImage: "ModalBanner-module_bannerImage_3YTi2",
      closeButton: "ModalBanner-module_closeButton_1yAkM",
      closeButtonImage: "ModalBanner-module_closeButtonImage_3clBN",
    };
  },
  "3df2": function (e, t, n) {
    e.exports = {
      header: "styles-module_header_2_n3A",
      navigation: "styles-module_navigation_YdAIm",
      logo: "styles-module_logo_3q5z1",
      searchForm: "styles-module_searchForm_rhCn-",
      invisibleSearchForm: "styles-module_invisibleSearchForm_zyAP6",
      settingBtn: "styles-module_settingBtn_2xojh",
      hamburger: "styles-module_hamburger_22tm_",
      modal: "styles-module_modal_3F4WT",
      menu: "styles-module_menu_3I6fb",
    };
  },
  "3e28": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAjVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8DizOFAAAALnRSTlMAgBj0hwSKyYLihGpbQSAB+/jvptXNX00tCMa+spuYUDkqEujl3a9yVS/mkXkX4MN39wAAAbFJREFUaN7t12lvgkAQxvGhuCoqqGC9qvVo69Hj+f4fr4bFQMF22IRJTDq/d5us808ky0FKKXW3PGQ8qiHq2M0PQoFTDMnAYg1IBuYTiAb6Y0gG9gdANNCBcGAqHRg+ppuWYgHa4qJt5AKUIJ4RCQaip4hkAjkNaEADGtCABjRwN4ErDWjg3wbMIJnE49dl9ywTmAa4OkTNB8waBXHYeOADP/i7hgMzlEyMxEdg0aDRQAjrKYyun/yPjQbadtNyUfi39gJf+rPiYtNkwB6Bkb2wn0j1mwz46Z7ALgbsL9wD9sK+2cVJIPCS7hnbxTH7iwQu8jxdrJiD4PkFI2RGfkGl9mw3relih7x2WxuMNpVtYB0NnQOk4iExBYf5ZF5g+QEyCX8w+fm5Kcq29JcWftWiW4ZJaVuHiC/w83Pm2fFm2mLmV4WJD/iw3g2xBXZ+1T7qo/4pa7HzqxavduOboRp6KOnVPvhTqqXnOv8ruwSTITkX+Pn5HQMbqqubz+8SazfKz4BzoUu8FayQXAqV+fyrBTnxSk8D/t1oS84Ffn7+KMaKXHm15i+C7Mk0J6WUul/fiw734ZIi4GIAAAAASUVORK5CYII=";
  },
  "3e42": function (e, t, n) {
    e.exports = {
      contents: "Featured-module_contents_poS84",
      bannerContainer: "Featured-module_bannerContainer_1MxSs",
      largeBanner: "Featured-module_largeBanner_1mpmG",
      banner: "Featured-module_banner_uZxg-",
      smallBanner1: "Featured-module_smallBanner1_21-iu",
      smallBanner2: "Featured-module_smallBanner2_3_y27",
      contentsBanner: "Featured-module_contentsBanner_1WFBA",
    };
  },
  "3e97": function (e, t, n) {
    e.exports = { divider: "styles-module_divider_84j1N" };
  },
  "428e": function (e, t, n) {
    e.exports = n.p + "img/img_vertical@4x.bfeb627b.png";
  },
  "4a6a": function (e, t, n) {
    e.exports = {
      s: "styles-module_s_1dYOu",
      m: "styles-module_m_1410x",
      l: "styles-module_l_2xDvF",
    };
  },
  "4dcf": function (e, t, n) {
    e.exports = {
      header: "Navigation-module_header_37C_9",
      chapterTitleWrapper: "Navigation-module_chapterTitleWrapper_3UMsZ",
      appear: "Navigation-module_appear_30FBL",
      hidden: "Navigation-module_hidden_1uUaZ",
      imageContainer: "Navigation-module_imageContainer_AShLe",
      detailContainer: "Navigation-module_detailContainer_1aDk8",
      title: "Navigation-module_title_180OT",
      chapterTitle: "Navigation-module_chapterTitle_20juD",
      settingsContainer: "Navigation-module_settingsContainer_1rlLY",
      kebabMenu: "Navigation-module_kebabMenu_3gR5D",
      circle: "Navigation-module_circle_1fTQK",
      logo: "Navigation-module_logo_2UY22",
    };
  },
  "4f3c": function (e, t, n) {
    e.exports = {
      setting: "styles-module_setting_6Uurn",
      menu: "styles-module_menu_23iWo",
    };
  },
  "513e": function (e, t, n) {
    e.exports = {
      mangaList: "MangaList-module_mangaList_Owudt",
      title: "MangaList-module_title_3b2sX",
      header: "MangaList-module_header_3pFMs",
      toggle: "MangaList-module_toggle_2znd9",
      toggleItem: "MangaList-module_toggleItem_2bwjB",
      linkActive: "MangaList-module_linkActive_2FFDQ",
    };
  },
  5185: function (e, t, n) {
    e.exports = n.p + "img/app_icon.04f38cf9.png";
  },
  5225: function (e, t, n) {
    e.exports = n.p + "img/abj1092_1042.57cf314d.png";
  },
  5764: function (e, t, n) {
    e.exports = { label: "styles-module_label_1F6TH" };
  },
  "596b": function (e, t, n) {
    e.exports = {
      overviewTitle: "ChapterList-module_overviewTitle_28uKZ",
      overviewTitleWrapper: "ChapterList-module_overviewTitleWrapper_xJ5aV",
      numberOfViews: "ChapterList-module_numberOfViews_14bIt",
      viewIcon: "ChapterList-module_viewIcon_1p37L",
      overview: "ChapterList-module_overview_3ajSr",
      separator: "ChapterList-module_separator_1Oam1",
      sort: "ChapterList-module_sort_3OHNF",
      message: "ChapterList-module_message_bxe9x",
      sortIcon: "ChapterList-module_sortIcon_1dGE4",
      chapterHeader: "ChapterList-module_chapterHeader_1_HCB",
    };
  },
  "5dfb": function (e, t, n) {
    e.exports = {
      flexContainer: "TitleDetailHeader-module_flexContainer_3D03N",
      right1: "TitleDetailHeader-module_right1_1o9Bj",
      fitImage: "TitleDetailHeader-module_fitImage_1-ino",
      sns: "TitleDetailHeader-module_sns_1IxNf",
      updateHeader: "TitleDetailHeader-module_updateHeader_2ReAr",
      title: "TitleDetailHeader-module_title_Iy33M",
      author: "TitleDetailHeader-module_author_3Q2QN",
      simulrelease: "TitleDetailHeader-module_simulrelease_1S2cw",
      updateInfo: "TitleDetailHeader-module_updateInfo_L3R3R",
      updateDescription: "TitleDetailHeader-module_updateDescription_1Iwsu",
      gridContainer: "TitleDetailHeader-module_gridContainer_3ITlG",
      gridItemFacebook: "TitleDetailHeader-module_gridItemFacebook_1qZrv",
      gridItemTwitter: "TitleDetailHeader-module_gridItemTwitter_3xQMP",
      favoritedBtn: "TitleDetailHeader-module_favoritedBtn_Z2Lrg",
      left1: "TitleDetailHeader-module_left1_3C2Fx",
      left2: "TitleDetailHeader-module_left2_D2OP0",
    };
  },
  "5e49": function (e, t, n) {
    e.exports = {
      showBtn: "Updates-module_showBtn_WUpS9",
      fadeIn: "Updates-module_fadeIn_1Afxc",
      hideBtn: "Updates-module_hideBtn_1ydgH",
      fadeOut: "Updates-module_fadeOut_2DqcJ",
      group: "Updates-module_group_V_oYD",
      fluidImage: "Updates-module_fluidImage_1NMT9",
      topImage: "Updates-module_topImage_1i-aW",
      featureTitle: "Updates-module_featureTitle_2bqgw",
      VueCarousel: "Updates-module_VueCarousel_3Rhjh",
      subHeader: "Updates-module_subHeader_Nc89q",
      subShowAll: "Updates-module_subShowAll_IFDwn",
      banner: "Updates-module_banner_2xL6d",
      flexContainer: "Updates-module_flexContainer_1FDso",
      main: "Updates-module_main_1jRHq",
      sub: "Updates-module_sub_2KMYR",
      subInnerWrapper: "Updates-module_subInnerWrapper_1P-W9",
      rankingTitle: "Updates-module_rankingTitle_Ky0uL",
      rankingHeaderTitle: "Updates-module_rankingHeaderTitle__rR8m",
    };
  },
  "5eec": function (e, t, n) {
    e.exports = n.p + "img/app_es.8c69b2c3.png";
  },
  "60fe": function (e, t, n) {
    e.exports = { title: "styles-module_title_3gUV9" };
  },
  "63e4": function (e, t, n) {
    e.exports = {
      input: "styles-module_input_1_xZD",
      radio: "styles-module_radio_311JI",
    };
  },
  "660a": function (e, t, n) {
    e.exports = n.p + "img/app_banner_en.580bb8aa.png";
  },
  "6ae4": function (e, t, n) {
    e.exports = {
      btn: "styles-module_btn_1VADN",
      icon: "styles-module_icon_127IQ",
    };
  },
  "6c9f": function (e, t, n) {
    e.exports = {
      gridContainer: "SubscribedTitles-module_gridContainer_1cbmH",
      empty: "SubscribedTitles-module_empty_34wNC",
      emptyImage: "SubscribedTitles-module_emptyImage_hsIMK",
    };
  },
  "6e75d": function (e, t, n) {
    e.exports = n.p + "img/search_2white.7112dd19.svg";
  },
  "6f17": function (e, t, n) {
    e.exports = {
      image: "AllTitle-module_image_JIEI9",
      allTitle: "AllTitle-module_allTitle_1CIUC",
      title: "AllTitle-module_title_20PzS",
      author: "AllTitle-module_author_2rV8i",
    };
  },
  7078: function (e, t, n) {
    e.exports = n.p + "img/img_gdpr_pc.a1bbcf4e.png";
  },
  7090: function (e, t, n) {
    e.exports = {
      container: "styles-module_container_1fWRa",
      img: "styles-module_img_1km_M",
    };
  },
  "720a": function (e, t, n) {
    e.exports = {
      container: "styles-module_container_3bCyC",
      toggle: "styles-module_toggle_1Ez_j",
      appInfo: "styles-module_appInfo_1BHlS",
      abj: "styles-module_abj_3Qpv-",
      abjLogo: "styles-module_abjLogo_2yZ-i",
      abjText: "styles-module_abjText_1tKPN",
      vertical: "styles-module_vertical_1oSu4",
      horizontal: "styles-module_horizontal_1i3Jc",
      footerNavigation: "styles-module_footerNavigation_2XusU",
      sns: "styles-module_sns_1MuOK",
      copyright: "styles-module_copyright_w9bq2",
    };
  },
  "721c": function (e, t, n) {
    e.exports = {
      modal: "Modal-module_modal_35zWl",
      settings: "Modal-module_settings_ZBqqu",
      modeContainer: "Modal-module_modeContainer_2orqk",
      postComment: "Modal-module_postComment_2S6LH",
      commentContainer: "Modal-module_commentContainer_3Hpf1",
      modeMessage: "Modal-module_modeMessage_3kUyi",
      modeItemWrapper: "Modal-module_modeItemWrapper_3ZWSe",
      viewMode: "Modal-module_viewMode_1z8Jn",
      share: "Modal-module_share_iu4Nv",
      facebook: "Modal-module_facebook_1TKE1",
      twitter: "Modal-module_twitter_7USC6",
      shareButton: "Modal-module_shareButton_3pDy8",
      commentIcon: "Modal-module_commentIcon_2niZA",
      quaritySelection: "Modal-module_quaritySelection_3Hp97",
      quarity: "Modal-module_quarity_1YUzn",
    };
  },
  "72f4": function (e, t, n) {
    e.exports = { form: "styles-module_form_XBgs-" };
  },
  "753f": function (e, t, n) {
    e.exports = {
      hamburger: "styles-module_hamburger_12E6I",
      border: "styles-module_border_QuRbe",
    };
  },
  "77b0": function (e, t, n) {
    e.exports = n.p + "img/search_1_grey.c4d60929.svg";
  },
  "77bc": function (e, t, n) {
    e.exports = n.p + "img/img_eng_outside_error.581f96c1.png";
  },
  "785d": function (e, t, n) {
    e.exports = {
      container: "styles-module_container_2RlKD",
      border: "styles-module_border_14dph",
      wrapper: "styles-module_wrapper_2_k3z",
    };
  },
  "7e1c": function (e, t, n) {
    e.exports = {
      container: "styles-module_container_1rtol",
      mainContainer: "styles-module_mainContainer_2tQWW",
      otherContainer: "styles-module_otherContainer_27uJu",
      footer: "styles-module_footer_3vV0p",
    };
  },
  "809d": function (e, t, n) {
    e.exports = {
      message: "styles-module_message_1dxVo",
      container: "styles-module_container_aAOj-",
      icon: "styles-module_icon_2bT0W",
    };
  },
  "821e": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAtCAMAAAAtKE1VAAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMAAvoHC/O09uAiyTIWEdHNvXRcKebXxrmZj7CsOhrbS0VwYlYtqJSKgB7t6qWEaT/BoHrnn+SoAAACp0lEQVRIx5VWWYKCMAxFEJFVBAVRdhj33fvfbSYpZSibkB9pmr4kL0kr1yPT+O1dTcNwr947nnKjRU5c6VMRyU3kUQD+9tMiO3UwQGx+OsSMh6Xg0gOr19KK8zy2lq8L1c1OXwEmy4KC9ZsJW32viV5MJv0I6oIYKlETPFOKvbwPIeWJ0aODJOJAyrqT2LChTvzDVpkvZvtIqKV560AQtgxh0yNySFA3AUv2VmhtRhODTIultWLKKR0pi3ceHbVgCE+so1pEvP/UxdVp363aMYQZ6EO5QIAVyFmZOfPie00xZNRs68W9opFWrDw8w298NLNvIulNeijAHtmwCEfQzWnnZXjCsMttjTB9oOsA41hWESzkQaZJoYHLzLeHYcnlFCAfWaUnJUi7bLolxlC7IXag/CmXOeQmlnHq4JX/H8IQrOuDrZ/BSC/XEQ/kUT+Y6L3ctFl/TGzW/zrBK6ToFfh+1WybYxYgcr2IKW6JkHmlUTYQcUvzwYwtqu28BjqgD27QvnZlawb1xa8moauqIpew0OTEvrrjsN7Y6Boa8+/3AOFUb+ft0ChkoMD7+zhBOMpkPBcCKKRTWQFvfEXwgkrIWJpY8bF9keLI0yFaQUT+uO588ECNRpc+LC/ymBmxL4BI3dIGDbXhk3pCk7RhYehD7wstZJaEUoxT0YfdWrpBRoyV6RMda0PuzsBAwEbrTB3kw/5+g9uI6QBVrRhi9u0dyUREIIDNXECuWt9rpv0QWqYdL+ILty8W1/WmcumZuAFFuyQ8Sbvj+VdNUqmE65FHSCKfPVr23KIyPtcrwo0nhs79xNwNd4Xo+aPAfZMcbdGdl0ZqEKhR6q2pzrG5ATKxjE+HLLIJN1Ci5/i/jE3ybwv2vHJUudGiWfudE4pi6Oz2ltZp9gsvZ7KKibRD8wAAAABJRU5ErkJggg==";
  },
  "842b": function (e, t, n) {
    e.exports = { logo: "styles-module_logo_2sj8Q" };
  },
  8514: function (e, t, n) {
    e.exports = {
      container: "styles-module_container_Du5fK",
      divider: "styles-module_divider_3mhyE",
    };
  },
  "855f": function (e, t, n) {
    e.exports = {
      container: "TitleDetail-module_container_3O1MS",
      flexContainer: "TitleDetail-module_flexContainer_1oGb4",
      mainContainer: "TitleDetail-module_mainContainer_1niDR",
      main: "TitleDetail-module_main_19fsJ",
      sub: "TitleDetail-module_sub_3Gl_e",
      banners: "TitleDetail-module_banners_1ALpQ",
      banner: "TitleDetail-module_banner_2kTCX",
    };
  },
  "85ec": function (e, t, n) {},
  "89c2": function (e, t, n) {
    e.exports = {
      input: "styles-module_input_1Joni",
      arrow: "styles-module_arrow_20a2y",
    };
  },
  "8b7a": function (e, t, n) {
    e.exports = {
      rankingTitle: "RankingTitle-module_rankingTitle_2E0E-",
      titleImg: "RankingTitle-module_titleImg_18ZMt",
      titleDetail: "RankingTitle-module_titleDetail_35zr8",
      title: "RankingTitle-module_title_2rg5n",
      author: "RankingTitle-module_author_2DBfa",
      viewCount: "RankingTitle-module_viewCount_1E3Re",
      icon: "RankingTitle-module_icon_hKj5L",
      rankingNumber: "RankingTitle-module_rankingNumber_a7Dbg",
      viewCountIcon: "RankingTitle-module_viewCountIcon_Haavo",
    };
  },
  "8c4f": function (e, t, n) {
    e.exports = {
      wrapper: "styles-module_wrapper_2fJBn",
      item: "styles-module_item_1b7tA",
      main: "styles-module_main_3Z8cE",
      divider: "styles-module_divider_2Wjtk",
      languageSetting: "styles-module_languageSetting_2zO6P",
      languageSettingContainer: "styles-module_languageSettingContainer_2yrsA",
    };
  },
  "8ce6": function (e, t, n) {
    e.exports = {
      text: "styles-module_text_2gkQu",
      items: "styles-module_items_2sfN5",
      item: "styles-module_item_3w45u",
      message: "styles-module_message_SR0HP",
    };
  },
  "8d45": function (e, t, n) {
    e.exports = n.p + "img/app_en.94f8b54e.png";
  },
  "8e44": function (e, t, n) {
    e.exports = {
      flexContainer: "HotTitles-module_flexContainer_2sQEA",
      gridContainer: "HotTitles-module_gridContainer_2jaSS",
    };
  },
  "8e4e": function (e, t, n) {
    e.exports = {
      container: "Error-module_container_mzmCx",
      img: "Error-module_img_PgTn-",
    };
  },
  "92b0": function (e, t, n) {
    e.exports = { wrapper: "styles-module_wrapper_1E4FG" };
  },
  9400: function (e, t, n) {
    e.exports = {
      shareButton: "ShareButton-module_shareButton_217yQ",
      content: "ShareButton-module_content_1Zhkq",
      twitter: "ShareButton-module_twitter_36sb8",
      facebook: "ShareButton-module_facebook_2v5Yx",
    };
  },
  9904: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABgCAMAAADPemeEAAAAq1BMVEUAAAD/1wD/1wD/1wD/1wD/2QD/1wD/1wD/2AD/2AD/1wD/7QD/1wD/2AD//wD/3gD/1wD/1wD/1wD/5wD/1wD/1wD/1wD/1wD/2AD/2wD/2gD/3AD//wD/1wD/1wD/1wD/1wD/2AD/2AD/1wD/2AD/3QD/1wD/1wD/2AD/1wD/2AD/2AD/2wD/1wD/1wD/2QD/2gD/1wD/1wD/1wD/1wD/1gD/2AD/1wD/1gDvYqtAAAAAOHRSTlMAmIDu1ig5+Xxc6Ab8MwISk8hvCvXy484sHxsOA8KwpJ12aGNCFrapiYRXSSTajj0w3lLRvZZNuSa0UAUAAAOCSURBVGjexZnrVuowEEaHa7EFCghyBwFFUBQV0b7/k521jqYT/I5J6STH/cu2mrFpZmY3pbPZPU3DUrswIP/E83ryyWxEnhmWk5Qrzzc3DBON3jN5ZDJNTihfkj+2yTeuyRuVIPnOnnyxToB+k/zwriLUOxfpPa7IC1G66rdEHfVzOCYfLNT4LxFRs6+OnsgDtyU1/CsR0V4dBTtyz7Uaffp5PFfHa3LOc12tjq+yMeyqaDfkmrR2HNWZWlpHJuSWezVy6VadurxS5zrklOhFGxj/gZhcwlMWGabWDaN0MTyQRiMtKc46Gy5zTIc3ckY1TeDKt0TvcaI7otmG0gQl7DEiN6zSohvDKn1U1xbkhHGI7QTbTu+WXLBR4x0mhHyoq3MnQhUYa+Cgri43SM5MDXZH/6SlrrdJzE267Ic/KHLa5y7EpnhgF/iBZWrIWS1SMNJEcxMBMEeWme4OSQI//Wa2NSSgkq7rKhnYBS4E+SOj028Egoy1aJR6T1WjgRVtSZmxV9lyolEixQULslyBzcFEgoyd0RaMqgJBhp5vDCYXZFbggTEYOpFMgY3BRIKMBmoOJhJk/FNLMLkgF3lSbMFw4gsCBbYGwyWVT4FndEpfDxbSKYUcggwpCt2ErUMuyFx8NtjgGGxfHS5wORR4jMNpbH4u3TUXCvyqB8N+8oBNifK3woYe7EEkyPYmH+vBKmaRkCtwN2EuCXliRRIoMGZ1KBZkVuCibRuwLRbkjuV3j5BmBmGXKvAC0izLc8j5AnSvpZlQkO2vdlVIM9Pro1CBR5Bmhk3yAy//XK/jzcCQZiZBzrXR8GhIMxTk+BwFRt5gCRm3aewK/J7FXe/O3IDKs+1VM6RZdkFugK+Yn8cyhzGhibXIRKX1xSDHdqjJMV1v9HrbXn6FLWyLAiNxQwM8I6MgD+GBGpcHKpT9swNzxwosDYaCPCUGPuMIg+GnonubAsuDoSCjAsuD4ee9mk2B5cFYkLsjmwLLg7GLza0KLA/GH5urKCiyYGZBhr1J58Hi8HT5r1GB5cFQkPt/p/Ws/eRxRSMmO82D7nVbvk8v7HU7XLO/+GGmzWPo5guYXX6CiEhVywH5gV9WI5bOq8K26IHtUQXosXT6p8wV3yecleNe8l+oj7goeGfBxdI33GOW3cQzwYI75a4VJh4pXZ8m8WS/qrUKHjgWVzcR/QZ/APm4X9WW765HAAAAAElFTkSuQmCC";
  },
  "99de": function (e, t, n) {
    e.exports = n.p + "img/hamb_white.75a1727a.svg";
  },
  "9b54": function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAABdRJREFUeAHtnU+MFEUUxmd1JYSQGCOJLhHMHjyoURIuXgwsHLwQgl4gIRoOctCDchBIMGuYXXYXFvSiHABjAgkHgQNRCHjQGA+S1Y1RD+IR2AT/JMJyQVlYXb63qd7p6Zl61d1V3dPje5U8uvq9qupXv6+6p6enN9RqWpSAElACSkAJKAEloASUgBJQAkpACSgBJaAElEBAAnNzc3WYq9QDHjLTUEhsEWwr7ATsV9hN2AzsOuwSbBi2KtOgVWqM5CsrAHLbBpuCpSln0ag/JNsHQg7WTWMBZC/sY+R8HLYiZe4vo90k+g2kbO9sJlYAkPkAtt1JqLXBo3CdgwjPtIaye0QKAHgbgert7LgWeixF7QzGeXDBk7MiTgBA6wGrkZy84t3oDNgad+SpixMAkNbDnmdgfWXaPIXtW7A7TNsdTCxVqDdVq/9Xo5eY6UwgtqGnp2fGtDmMM+Yq6ufMfnKzGvFlaP9XMpB2X+IZsJaBMxaDP98M++dR+c7Shy5nL1piqdwSBeizkPkX/ouW2GcWP7mXMzFnSKIAyyxUfsNqn7XErln85LaNx3RphCQKYLt1jK77DTqN2t1GtaVGl6HcRaIAtyy0nrD4yf0kE5tmYs6QRAGmLFQW447Gdnu6xtKH3DeYmDMkUYAfGCp0399UIMqzcGxscjbv/Ny8m21PogBfMIi2A/hO2EPUBlt6BE13RrbrPF3OfoHlLhIFuABafzLEDiF2C/DpUvUTjHtSegF3TnPMWM6QOAEA7B6o7HGQWYI4Bz7q/lFUybsVJ4ABdRzbT/NCM/0mISY9uvAqIgUwl43XQO6oB70PPfoudBUpAM0eIszC3kB1AHYadhsWlb+jimX7O/zUx7uIFSAiBxG+gW2B0Y8s9FihH/ZOFLdsR9Ge+3Zs6dbqlvg4upWC8QDqDdz9/IPd96yNarUriB1j4plC4s+ANrRo9XNPOOsQiu6kghQVIIYRq/8x7O6OuZLVy3CcTDp99lWAZnrD2KXPAlsZxOr/zxbM41cBDDWsfvqR/XUGIt33n2XiuUIqQAPbQVRtvxVQq3cbTcPVVACwxOpfh80GBuvXWP1fMvHcIfECAD496XzfQbCQ1U/HFC8AGLwKW00wLOVzrH7vZz6WsWULgNW/GGBGbXDgpzueQSbuHRL9TRgrm956W+lN0WMAvQR5wAvRVQUIQdFjDBXAA16IripACIoeY6gAHvBCdFUBQlD0GEMF8IAXoqsKEKOIL2b9sAmYrTweax6kqgIYjCC+GdUfYS8EIZtyEPECAPwSGP298CnYwym5BWsm+lEEwD9nwD8djGjGgcSeAYD/Jlh9D+sYfNJK3BkA8I9g3p/AXiEAnS7iBABwet281A9aTmSJl6AjHJCyYxIFOAHItr+SuaQCFEwAP8LQH1TsSByGfPS78NqEv/BdiWcAvRn9LcjSfT+Vadgm+HbBZuc9Jf4j8UM4wkuvINKjhW0Afy1ylr0VKwCgTwH2QNnAk8cTeQlKQujkPr2UlKngi8xedNiVqVOttgjt5//0k+lHr3zfZeLtQoewkofaBfL6MD/6QLaVPhzvD1uwND9yPEiJdrjQu5zBi2NOwR9H554AEh13JFtkeDx34o6OjqSrIwDNo0MiFAbfzInToFoCmIQPcBkHjh2gYxZZHPlWTwCCgaTLEKFw+GYunAbVFMAkvp/L3DO2n45RRnHkWV0BCA6SH3NMIE94rAzw0TEcCVZbgAJEKBW+yZ/ToPoCmEmMcrNIGePe248WbPCtI7fuEMCIMOKYDBceCU425YBcUoh1jwAeInQMvsmZ06C7BDAT2sfNKBHbl3KhFtYskU9yt/sEMCLQfwHiKsOFUc0wsCPJ7hQghQiVgG/y5DToXgHM5IbazC7o4+QMi71t0zb5xV3dLYARoR6bUb0thQ46Y7m1qwYXoPSfJPGDBgkwj5jqHWSth1YCSkAJKAEloASUgBJQAkpACSgBJaAElIASUAKlErgPc08pyRztVe0AAAAASUVORK5CYII=";
  },
  "9cc0": function (e, t, n) {
    e.exports = n.p + "img/img_horizontal@4x.40649675.png";
  },
  a177: function (e, t, n) {
    e.exports = n.p + "img/flogo-HexRBG-Wht-58.e3d3a393.svg";
  },
  a5b5: function (e, t, n) {
    e.exports = {
      container: "HotTitle-module_container_1c2RB",
      texts: "HotTitle-module_texts_3ApHq",
      textNotTop: "HotTitle-module_textNotTop_3If7r",
      icon: "HotTitle-module_icon_38IkY",
      viewCountIcon: "HotTitle-module_viewCountIcon_dq9_c",
      rank: "HotTitle-module_rank_3tDWo",
      title: "HotTitle-module_title_3jraN",
      author: "HotTitle-module_author_1Xt4T",
      hotTitle: "HotTitle-module_hotTitle_3XHp9",
      count: "HotTitle-module_count_2oe7s",
      textsNotTop: "HotTitle-module_textsNotTop_12GJZ",
    };
  },
  a7ed: function (e, t, n) {
    e.exports = {
      input: "styles-module_input_3SzMJ",
      checkbox: "styles-module_checkbox_2pXpO",
    };
  },
  ac0d: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAACsCAMAAACO/jijAAAAnFBMVEUAAAC/YiW6XSW6XCXAZS2/YSrUfjzGZjW6XCS6XSS6XSW6XCS6XSXBZCm6XSW6XCS6XSS6XSS6XSW6XSS6XSW6XSS7Xia6XSS7XSW6XCS6XSS6XSS6XSW7XSW6Xya9Xya9YCm6XCS6XSS6XSS6XCW7XiW7XSW7XSa8XSa+Xyi6XSW7Xya7Xia6XSW7Xyi6XCS6XCW6XSW7XSW5XCRekoKXAAAAM3RSTlMAG+T6DhcECO32nsGJEqTUxn9q3Xp2TnBg8amTZVQ/KR/or5iORFpJOCS0PDPQLcvXuoNzIiZOAAAGZklEQVR42uzZ2XKiQBQG4F9AwAVE0ahE4xbcNXH+93+3yVgTGgVbGhVv/C6V6qZOn6WrwMuLmjcLzzNd4GmMShVPM6Rt4lkCMsSTWH1yhid5IznBk7j8scFTmDZ/vOMpFvxHQ2HMsuDyKBS/OHisVoUXNUZ4sH2DF8wsPJw1Yxr7DYUY2kyolVCQUo2n9CaKYzZ1xmgbFOqDgmegWFsKOxSszpgViuUzpoNC7XlU4dEXCtX8X9z/S36MIjWOxR2VfBcFGpH0l6LkPRSoTQZRcW80sozi7CoDCM6ULRRmvBvhxGCNwoytRBLg5eXl/pztsPNeDda1w9Sd1VuLlYVijHuuxnP6V31h4MFWTZ+X6Ie5hYexBh7l+tUlHsLoTJhBLcTdWW2bGXn33n7hU0FQxv2UplTT7+JeFjaVHcq4B7POPCYfuJ1TYxrbqza7g+G81alPGzrTdHCr0jcTNLc3Rpy5bB8qTPjEbUZaso+ESGOkdCDXxA32Nk9NOobkTV2dp6YmchtrPGG3LEitXJ6qIi/n+2wlB1d9NHiijnwsj3Fattox//BEC7m8M27tIKNwwhh9ixzeGPcH2ZV3jPENKBvb+YNn1BgTQNmBMXOosdaMGULR8LaksWoUNANKDI1CE+qMRv4+W6cwRR6rPiP6CAqciixb1Q/OhYJYo9CXSFde9LrNdmu+tZBuFltkhcyM/rXzWlZ9sfKuuZLkjWqPb1/J1MWOZw5bJM0Z0UvI6lta4Y7LFO8mEmo5rjVLRnwzuXeDqQ7JGIWMNHJMlIG8gEl5SnuMbFW+FB5ppiSHE+ay4fSpHPU6zn0wQRJacyL+VM71Pc6tGfF6m9J2OKWwxLlPRsqK82yHc2U9Kp75byx0/uri3FZxtlkVSdR7KRt1Zecq8meGDPaMhJcHziQWDVkfC/jrS20g6NbltQIIE8lVtcVffbV82yETSxe1Jjt0A9e5qpevMIpUGQkGIyNc5yneWB1fOrrEaNvgOtE+e0iQTbhJCZANl1Dpc90bJLbdH/VAvKq9QZq1ZDlZZYbX81LwxkgVKHUZXXTL7Jv7bRPpqkqX/4r65jURcdnmDwp75as5wj3C7md7us0zwd/2zW1JURgIoM1luIuAgiAM42297qpr//+/7W7VTiVOTCZhgvPCebQsj5ru0J2GhYaAI8VhoyRHbwcPSJRSLZQ7VTilf9msLhax+yfhKu4l5IFan3Soid502f1P7f6CHN+5ghSNqEDeq11YCom3y1+zZyQkJGfj4vgUlDdo84M9AQmcinQhzAoa73Cu2W/MhynWziuyafKLdjqwX/mtQav6N87YWlhcK9ZsfcymjmWDYgW55jZf1o68aJFXmZtThfWjuPjwbG4H4v8/AnYzj2oW+aGYqh/I5PwOBL15lKX0dJGtfa7MFqOSbEsX7jAqFLC0uccyCchyQW4H1CADN6CdX12O8jJqsMDGL5c1P22qEcjiLgUt/xoJwpHKS9Xt2D1HweaQPVx3r+FvVui/gDy2R30qU44bzCwF/fWLYO2wBuj40xOHbdPzuyIibGy2rqffYIAKzvizKY3bZukmWEd5eXbEsyH18V6LFNHXZkNXBxSJkWKq6r4gRav+3c3uk8nFFSlqUGdvIUXsgjRnEykuLnQg73jzeuMjRXWATqyQpirllmvO3+/VpzSEUOLHl173gaL4kNeqDRDyI8F7UuiOMcEP+rVgCQuiFgW6+mSSQO2lNOfIxI/c4GvYITJYya0dAcViG0yQJYOv4sackimM62iabtbzsY+PqF5BA42PHfj1Blo4X5FL/w+1uJGFSkx2oJG3EOXxby7o5XWMcljxAfRTXGTUwQH6oQ0qFHKdGtAf7vboc6Os3kPfOKc09Bhx3BzgWdjnXZnNprdbPmu27cKBAe0Yq5+qcVGG2uSIv08qKZGZaGqUI4Y7kGOULxE1yxGXdft5FpRHC1Gv/B2T+Plm7XKCn9QP+lK7ncVXJOiX099gHkTTbLsryllax8cJEvqWswzyQT7IB/kgH+Qa5NYmeaKcPRprvG+ReyX8YxR8gzwYkccYniwfn4DgTP0nyv3cgTsWx6fJVwtgKMynyCcFPMLeWL3LrcgFDuekZ7n41LvxepR7JYgZBfrlSs8u6ZaT1BZAkl6vnKS2DIujVjlJbTkKU6PcLEANO5qAJhwHlLFhYIDlDz2jrBwe4Y/0AAAAAElFTkSuQmCC";
  },
  ad6e: function (e, t, n) {
    e.exports = { anchor: "styles-module_anchor_8_ptB" };
  },
  b3d2: function (e, t, n) {
    e.exports = n.p + "img/maintenance.2515d118.png";
  },
  b5b6: function (e, t, n) {
    e.exports = {
      container: "styles-module_container_kWnuS",
      appIcon: "styles-module_appIcon_rGZ68",
      appStoreIcon: "styles-module_appStoreIcon_3joeo",
      playStoreIcon: "styles-module_playStoreIcon_2Wzvj",
      vertical: "styles-module_vertical_2WFUo",
      text: "styles-module_text_2Gg98",
      horizontal: "styles-module_horizontal_nhDKQ",
    };
  },
  b85d: function (e, t, n) {
    e.exports = {
      container: "index-module_container_-p6fK",
      description: "index-module_description_1Arwn",
      questionnaire: "index-module_questionnaire_38ygP",
      questionnaire_item: "index-module_questionnaire_item_3QJdZ",
      questionnaire_number: "index-module_questionnaire_number_2jd_c",
      radio: "index-module_radio_3q3eO",
      checkbox: "index-module_checkbox_2Bpzz",
      label: "index-module_label_1hxoD",
      choices: "index-module_choices_1JCFR",
      radios: "index-module_radios_1kd0X",
      button: "index-module_button_kq6Bt",
      answered: "index-module_answered_3ieoT",
      error_message: "index-module_error_message_1xYnq",
      header: "index-module_header_37Zag",
      check_mark: "index-module_check_mark_2t1oX",
      header__text: "index-module_header__text_Vl6RR",
      finished__body: "index-module_finished__body_3dxbw",
      textarea: "index-module_textarea_1DSLk",
    };
  },
  b89d: function (e, t, n) {
    e.exports = n.p + "img/favorited_empty.91b0b32f.png";
  },
  b9f1: function (e, t, n) {
    e.exports = {
      body: "styles-module_body_x8lhZ",
      type: "styles-module_type_1pTYR",
      container: "styles-module_container_q5GjM",
      btn: "styles-module_btn_2ZN9X",
      enable: "styles-module_enable_8vopY",
      disabled: "styles-module_disabled_2iutC",
    };
  },
  bb28: function (e, t, n) {
    e.exports = n.p + "img/app_banner_es.5b47a8da.png";
  },
  bc8e: function (e, t, n) {
    e.exports = {
      wrapper: "styles-module_wrapper_1wAOz",
      border: "styles-module_border_1bONz",
    };
  },
  be22: function (e, t, n) {
    e.exports = n.p + "img/google-play-badge.5cdbd5c8.png";
  },
  be42: function (e, t, n) {
    e.exports = {
      btn: "styles-module_btn_17GWO",
      done: "styles-module_done_3BFzO",
      default: "styles-module_default_uUjEB",
      outline: "styles-module_outline_TKY5K",
    };
  },
  be59: function (e, t, n) {
    e.exports = n.p + "img/web_logo_190118_light.96b51339.png";
  },
  c243: function (e, t, n) {
    e.exports = {
      chapterListItem: "ChapterListItem-module_chapterListItem_ykICp",
      endTime: "ChapterListItem-module_endTime_4r_4L",
      chapterWrapper: "ChapterListItem-module_chapterWrapper_3CxyE",
      thumbnail: "ChapterListItem-module_thumbnail_1w6kS",
      thumbnail_alreadyRead:
        "ChapterListItem-module_thumbnail_alreadyRead_1u3_a",
      name: "ChapterListItem-module_name_3h9dj",
      name_alreadyRead: "ChapterListItem-module_name_alreadyRead_1HYKk",
      title: "ChapterListItem-module_title_3Id89",
      title_alreadyRead: "ChapterListItem-module_title_alreadyRead_3tKxq",
      commentContainer: "ChapterListItem-module_commentContainer_1P6qt",
      commentIcon: "ChapterListItem-module_commentIcon_3lw4k",
      limitIcon: "ChapterListItem-module_limitIcon_tGiFP",
      limitContainer: "ChapterListItem-module_limitContainer_2JLZi",
      limitTime: "ChapterListItem-module_limitTime_14zxT",
      date: "ChapterListItem-module_date_xe1XF",
      date_alreadyRead: "ChapterListItem-module_date_alreadyRead_31MGZ",
      limitDate: "ChapterListItem-module_limitDate_20Cs2",
    };
  },
  c510: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAACsCAMAAACO/jijAAAAh1BMVEUAAAClpaWfn5+fn5+0tLShoaGjo6Oenp6kpKTDw8Ofn5+fn5+enp6fn5+fn5+fn5+hoaGqqqqfn5+fn5+enp6goKCfn5+ioqKfn5+fn5+fn5+goKCgoKCfn5+fn5+fn5+fn5+fn5+fn5+fn5+goKCfn5+fn5+mpqagoKCjo6OgoKCfn5+enp5pFB12AAAALHRSTlMAF+WhBjQc+g8DxYry7HK+JQvfkdhbtivSeGtGVK+lTfbLgGFAmWYTOyCFqQRfa8cAAAaiSURBVHja7ZppY6IwEIajgOG+BAUUUMGz8/9/3263u01UyEXsfvH5PPVlkrlgit68GcPZittudYtfImHTa6ZbfInPoqYhrDWLp9CJmrpw0KttAawETRcAhV5xDwDbYqYVAMSaTx0gFzONAKDUqb2G39RCpjMMAHud4gf4zS4RMT3BJ1eN4hl8IlQ8VvBJOFHQnn1zgT/UM4IzYhpj+MSlTE0F8XgPo+Dy/p4jGMczkQKmByOk1qNtiWGY+QYpspnDEMZAxlspDLGaIWVmK3jCz4dDpIEn8MS4Cx/Pcz9avXIf7smsyVU9Y4QPM0SNBE0miYCwYYcoffQnpAMXCD3blBbvdGjPgOLI9tynA12HeAUUc4dl2gIFtjWIR/CHv05dWKbGnWk+XfuMv5L7b8ovWRNu8JXctgGkBU+i+0rufymfsgrid3LnPr8Fi7ZIzyQpzygcR5Lc8Z60YHVsTPWGxADwWKfu53RXaqaK5/e9IffHz70H93rXlXxzovjHQ2+47tdjpsub89CV2oniT1JmzDMlxOjNmzdTsK1tuTQ+VlFUN0ev2sQm+hmunTGHR/De2yToxcSHDMbAq/yF+ubJBTa+cUEvIQnnIEC00S9tlgEIsu81a29SkKCZaZRe1CCHHzq6tNsApIn0OO94oMJcx82fh9MrcI1D2G3zKvTqDMMQ4fTrzgacMrrF/eFYZYThieXUKWr+XEeGz9MeqECNOUk7eHQ6TBjWzaP7tTPhzB/8DiqOK3ED9xjqsZY9/NIZcekLuMNTraiuSu6YB7ijUlwuAM3qrPYBDVsq2luguSFxZgVQpLbCwBKoH54dAcWH0qsxIZcNlxootpMO/TQtWOeJ5NhCB81BZb4t1PPNA0KtNuT6VMSvpcrLjhGtChfXIAluAnlqb/LqUJ62lsOvEziWuDCf1xfjJbnTXVTZg78yp79cClNSkTr0u9YK7tkdh+pfTrkuPlVlzAx3DhieCIaSOVIYayz4JnOeUzgC0amph28KhY7SPftdwwgV82u5YH9xAnLj5uBykYYZ0q10obFYf3HdwSgRy49COtafK5NBjZLL3GrLFAgx6wbF4j0iT8vaJdSLry5wZDUBS7K3meRgPcYl7s1/R+uyNhuBXJ1Zs3ZJ3sCNbFj3+kGeVq4h4GT8yt2hDdB8eJ3+hS8XbwUjHgzqnkhJYqaOSHc0WMOX+Q+HajKMXEM2nQt8XNkJ5sAccUlruyA+heRO0A6YJdSlwpdPysxMVjy77Cm4RXwCqUdFN07vaKR8wVKNqOS1DlIAcynxi0ywQeTwxFWPnd/5C5sXElvFgOPv6rMZ97Wr1ZlqScTQVky1SHD4mO2pM58J3OJFqrzWLLM4pWJtvGyf5cpryegTBIt4BLU5bnchZgni04r0oY1PrAwHjROSyV5okwH8+Myx6AeTFV18+Tg+9/tlCIRQ5sf41OTtmPvyjjllq2ccI8+vC6e07DbCqYNtJDlBHtmlJeC1nsRnz4/M4SNIWKUF59YDj7Wmk/+wcxsPp1kKLKqHcMvESww599E3RQtkxLcgnGiEPe26urhTqHzKO8E3/kxdvKJ+xhYWN0nIQaMsPvN5Ixa/hLWq4jVVD2S2bElAJfNCTbxS3jPRrrtU17oaTHrqMTHl+EJK3MwmbmmucyCUSI4eKLxpu6HMRJI0MOHRz3ug6OWfPVXfTC6yqVvNCwaKJlHdge5NpEAJNEUsXB93QOFfkRI10Pid2HU1cEerZ6UI0Rpx6QIgkIaivKUh4CWnWmxcuOeA1Fmk8CB/HL96p91rXd+TqYngnuzBEPfmAHy/FTeTBOzeept2+ZobKaPNqGM2MPYfG0uvPHjHutjBEP4WqUPnrQykLmhhnYE0RxNpIvEwSJG2SCPrCMTBtwTpZVuISjcx0k+7Bx6kCumnN3xgkpUL9DqSfDWaeOnSQq/GvByi4Em4OcXop7DXbVeFh9utDE95fzXRG+0saks2LrpImzjA6iKTElUKc43iAO7GEYzFcg6gWRxgvuwdrnK3wgC6xYk+V1m7OGHnLru186Tbh00GBP3i9BN8HL2yyjdtFx6WxorS1S/O5S3+Fn+Lv8Xf4m9xDeJ46f43cXeN0Cn4L+JB9/XRz/gP4uQ/Xfvsh8ULepQ2y90Piu9C52GvsPox8XrxbLNNf0Q8bRkfjV4rjr1kzGztvkqcpDaDU/AKcZLabM6GfnGS2lwuhW5xktoMSNLrFiepzedaaxUnqS1Gm2oUT1vpL8WpLnHHRNLY6M2bZ34BEyxYNB5OGAoAAAAASUVORK5CYII=";
  },
  c544: function (e, t, n) {
    e.exports = {
      label: "styles-module_label_3C1G0",
      wrapper: "styles-module_wrapper_HMi7g",
      disabled: "styles-module_disabled_2TdUA",
    };
  },
  c72d: function (e, t, n) {
    e.exports = {
      navigation: "styles-module_navigation_2JSpv",
      navigationItem: "styles-module_navigationItem_2PF0W",
    };
  },
  c8e1: function (e, t, n) {
    e.exports = n.p + "img/like.dc9b1341.svg";
  },
  c9f1: function (e, t, n) {
    e.exports = { allTitles: "AllTitles-module_allTitles_2zHO8" };
  },
  ccc1: function (e, t, n) {
    e.exports = n.p + "img/top_wide.6353573d.png";
  },
  cd08: function (e, t, n) {
    e.exports = {
      title: "styles-module_title_3bfs3",
      contentsWrapper: "styles-module_contentsWrapper_1-Qek",
      content: "styles-module_content_20XZI",
      date: "styles-module_date_3ND4b",
      body: "styles-module_body_146J0",
      border: "styles-module_border_1yWLl",
    };
  },
  cd49: function (e, t, n) {
    "use strict";
    n.r(t);
    n("ac1f"),
      n("1276"),
      n("e260"),
      n("e6cf"),
      n("cca6"),
      n("a79d"),
      n("a4d3"),
      n("e01a"),
      n("4de4"),
      n("4160"),
      n("caad"),
      n("d81d"),
      n("b0c0"),
      n("b64b"),
      n("2532"),
      n("159b");
    var a,
      i = n("9ab4"),
      r = n("60a3"),
      o = n("b85d"),
      s = n.n(o),
      l = {
        functional: !0,
        render: function (e, t) {
          return t.children;
        },
      },
      c =
        (n("ace4"),
        n("d3b7"),
        n("5cc6"),
        n("9a8c"),
        n("a975"),
        n("735e"),
        n("c1ac"),
        n("d139"),
        n("3a7b"),
        n("d5d6"),
        n("82f8"),
        n("e91f"),
        n("60bd"),
        n("5f96"),
        n("3280"),
        n("3fcc"),
        n("ca91"),
        n("25a1"),
        n("cd26"),
        n("3c5d"),
        n("2954"),
        n("649e"),
        n("219c"),
        n("170b"),
        n("b39a"),
        n("72f7"),
        n("bc3a")),
      u = n.n(c),
      d = n("543b"),
      p = d["Reader"],
      m = d["Writer"],
      h = d["util"],
      g = d["roots"]["default"] || (d["roots"]["default"] = {}),
      f = (g.Proto = (function () {
        var e = {};
        return (
          (e.AdNetworkList = (function () {
            function e(e) {
              if (((this.adNetworks = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.adNetworks = h.emptyArray),
              (e.encode = function (e, t) {
                if (
                  (t || (t = m.create()),
                  null != e.adNetworks && e.adNetworks.length)
                )
                  for (var n = 0; n < e.adNetworks.length; ++n)
                    g.Proto.AdNetwork.encode(
                      e.adNetworks[n],
                      t.uint32(10).fork()
                    ).ldelim();
                return t;
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.AdNetworkList();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      (a.adNetworks && a.adNetworks.length) ||
                        (a.adNetworks = []),
                        a.adNetworks.push(
                          g.Proto.AdNetwork.decode(e, e.uint32())
                        );
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.AdNetwork = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            var t;
            return (
              (e.prototype.facebook = null),
              (e.prototype.admob = null),
              (e.prototype.mopub = null),
              (e.prototype.adsense = null),
              (e.prototype.applovin = null),
              Object.defineProperty(e.prototype, "Network", {
                get: h.oneOfGetter(
                  (t = ["facebook", "admob", "mopub", "adsense", "applovin"])
                ),
                set: h.oneOfSetter(t),
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.facebook &&
                    e.hasOwnProperty("facebook") &&
                    g.Proto.AdNetwork.Facebook.encode(
                      e.facebook,
                      t.uint32(10).fork()
                    ).ldelim(),
                  null != e.admob &&
                    e.hasOwnProperty("admob") &&
                    g.Proto.AdNetwork.Admob.encode(
                      e.admob,
                      t.uint32(18).fork()
                    ).ldelim(),
                  null != e.mopub &&
                    e.hasOwnProperty("mopub") &&
                    g.Proto.AdNetwork.Mopub.encode(
                      e.mopub,
                      t.uint32(26).fork()
                    ).ldelim(),
                  null != e.adsense &&
                    e.hasOwnProperty("adsense") &&
                    g.Proto.AdNetwork.Adsense.encode(
                      e.adsense,
                      t.uint32(34).fork()
                    ).ldelim(),
                  null != e.applovin &&
                    e.hasOwnProperty("applovin") &&
                    g.Proto.AdNetwork.Applovin.encode(
                      e.applovin,
                      t.uint32(42).fork()
                    ).ldelim(),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.AdNetwork();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.facebook = g.Proto.AdNetwork.Facebook.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 2:
                      a.admob = g.Proto.AdNetwork.Admob.decode(e, e.uint32());
                      break;
                    case 3:
                      a.mopub = g.Proto.AdNetwork.Mopub.decode(e, e.uint32());
                      break;
                    case 4:
                      a.adsense = g.Proto.AdNetwork.Adsense.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 5:
                      a.applovin = g.Proto.AdNetwork.Applovin.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              (e.Facebook = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.placementID = ""),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = m.create()),
                      null != e.placementID &&
                        e.hasOwnProperty("placementID") &&
                        t.uint32(10).string(e.placementID),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof p || (e = p.create(e));
                    var n = void 0 === t ? e.len : e.pos + t,
                      a = new g.Proto.AdNetwork.Facebook();
                    while (e.pos < n) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          a.placementID = e.string();
                          break;
                        default:
                          e.skipType(7 & i);
                          break;
                      }
                    }
                    return a;
                  }),
                  e
                );
              })()),
              (e.Admob = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.unitID = ""),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = m.create()),
                      null != e.unitID &&
                        e.hasOwnProperty("unitID") &&
                        t.uint32(10).string(e.unitID),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof p || (e = p.create(e));
                    var n = void 0 === t ? e.len : e.pos + t,
                      a = new g.Proto.AdNetwork.Admob();
                    while (e.pos < n) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          a.unitID = e.string();
                          break;
                        default:
                          e.skipType(7 & i);
                          break;
                      }
                    }
                    return a;
                  }),
                  e
                );
              })()),
              (e.Adsense = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.unitID = ""),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = m.create()),
                      null != e.unitID &&
                        e.hasOwnProperty("unitID") &&
                        t.uint32(10).string(e.unitID),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof p || (e = p.create(e));
                    var n = void 0 === t ? e.len : e.pos + t,
                      a = new g.Proto.AdNetwork.Adsense();
                    while (e.pos < n) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          a.unitID = e.string();
                          break;
                        default:
                          e.skipType(7 & i);
                          break;
                      }
                    }
                    return a;
                  }),
                  e
                );
              })()),
              (e.Applovin = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.unitID = ""),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = m.create()),
                      null != e.unitID &&
                        e.hasOwnProperty("unitID") &&
                        t.uint32(10).string(e.unitID),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof p || (e = p.create(e));
                    var n = void 0 === t ? e.len : e.pos + t,
                      a = new g.Proto.AdNetwork.Applovin();
                    while (e.pos < n) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          a.unitID = e.string();
                          break;
                        default:
                          e.skipType(7 & i);
                          break;
                      }
                    }
                    return a;
                  }),
                  e
                );
              })()),
              (e.Mopub = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.unitID = ""),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = m.create()),
                      null != e.unitID &&
                        e.hasOwnProperty("unitID") &&
                        t.uint32(10).string(e.unitID),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof p || (e = p.create(e));
                    var n = void 0 === t ? e.len : e.pos + t,
                      a = new g.Proto.AdNetwork.Mopub();
                    while (e.pos < n) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          a.unitID = e.string();
                          break;
                        default:
                          e.skipType(7 & i);
                          break;
                      }
                    }
                    return a;
                  }),
                  e
                );
              })()),
              e
            );
          })()),
          (e.Banner = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.imageUrl = ""),
              (e.prototype.action = null),
              (e.prototype.id = 0),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.imageUrl &&
                    e.hasOwnProperty("imageUrl") &&
                    t.uint32(10).string(e.imageUrl),
                  null != e.action &&
                    e.hasOwnProperty("action") &&
                    g.Proto.TransitionAction.encode(
                      e.action,
                      t.uint32(18).fork()
                    ).ldelim(),
                  null != e.id &&
                    e.hasOwnProperty("id") &&
                    t.uint32(24).uint32(e.id),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.Banner();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.imageUrl = e.string();
                      break;
                    case 2:
                      a.action = g.Proto.TransitionAction.decode(e, e.uint32());
                      break;
                    case 3:
                      a.id = e.uint32();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.Chapter = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.titleId = 0),
              (e.prototype.chapterId = 0),
              (e.prototype.name = ""),
              (e.prototype.subTitle = ""),
              (e.prototype.thumbnailUrl = ""),
              (e.prototype.startTimeStamp = 0),
              (e.prototype.endTimeStamp = 0),
              (e.prototype.alreadyViewed = !1),
              (e.prototype.isVerticalOnly = !1),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.titleId &&
                    e.hasOwnProperty("titleId") &&
                    t.uint32(8).uint32(e.titleId),
                  null != e.chapterId &&
                    e.hasOwnProperty("chapterId") &&
                    t.uint32(16).uint32(e.chapterId),
                  null != e.name &&
                    e.hasOwnProperty("name") &&
                    t.uint32(26).string(e.name),
                  null != e.subTitle &&
                    e.hasOwnProperty("subTitle") &&
                    t.uint32(34).string(e.subTitle),
                  null != e.thumbnailUrl &&
                    e.hasOwnProperty("thumbnailUrl") &&
                    t.uint32(42).string(e.thumbnailUrl),
                  null != e.startTimeStamp &&
                    e.hasOwnProperty("startTimeStamp") &&
                    t.uint32(48).uint32(e.startTimeStamp),
                  null != e.endTimeStamp &&
                    e.hasOwnProperty("endTimeStamp") &&
                    t.uint32(56).uint32(e.endTimeStamp),
                  null != e.alreadyViewed &&
                    e.hasOwnProperty("alreadyViewed") &&
                    t.uint32(64).bool(e.alreadyViewed),
                  null != e.isVerticalOnly &&
                    e.hasOwnProperty("isVerticalOnly") &&
                    t.uint32(72).bool(e.isVerticalOnly),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.Chapter();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.titleId = e.uint32();
                      break;
                    case 2:
                      a.chapterId = e.uint32();
                      break;
                    case 3:
                      a.name = e.string();
                      break;
                    case 4:
                      a.subTitle = e.string();
                      break;
                    case 5:
                      a.thumbnailUrl = e.string();
                      break;
                    case 6:
                      a.startTimeStamp = e.uint32();
                      break;
                    case 7:
                      a.endTimeStamp = e.uint32();
                      break;
                    case 8:
                      a.alreadyViewed = e.bool();
                      break;
                    case 9:
                      a.isVerticalOnly = e.bool();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.Comment = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.id = 0),
              (e.prototype.index = 0),
              (e.prototype.userName = ""),
              (e.prototype.iconUrl = ""),
              (e.prototype.isMyComment = !1),
              (e.prototype.alreadyLiked = !1),
              (e.prototype.numberOfLikes = 0),
              (e.prototype.body = ""),
              (e.prototype.created = 0),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.id &&
                    e.hasOwnProperty("id") &&
                    t.uint32(8).uint32(e.id),
                  null != e.index &&
                    e.hasOwnProperty("index") &&
                    t.uint32(16).uint32(e.index),
                  null != e.userName &&
                    e.hasOwnProperty("userName") &&
                    t.uint32(26).string(e.userName),
                  null != e.iconUrl &&
                    e.hasOwnProperty("iconUrl") &&
                    t.uint32(34).string(e.iconUrl),
                  null != e.isMyComment &&
                    e.hasOwnProperty("isMyComment") &&
                    t.uint32(48).bool(e.isMyComment),
                  null != e.alreadyLiked &&
                    e.hasOwnProperty("alreadyLiked") &&
                    t.uint32(56).bool(e.alreadyLiked),
                  null != e.numberOfLikes &&
                    e.hasOwnProperty("numberOfLikes") &&
                    t.uint32(72).uint32(e.numberOfLikes),
                  null != e.body &&
                    e.hasOwnProperty("body") &&
                    t.uint32(82).string(e.body),
                  null != e.created &&
                    e.hasOwnProperty("created") &&
                    t.uint32(88).uint32(e.created),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.Comment();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.id = e.uint32();
                      break;
                    case 2:
                      a.index = e.uint32();
                      break;
                    case 3:
                      a.userName = e.string();
                      break;
                    case 4:
                      a.iconUrl = e.string();
                      break;
                    case 6:
                      a.isMyComment = e.bool();
                      break;
                    case 7:
                      a.alreadyLiked = e.bool();
                      break;
                    case 9:
                      a.numberOfLikes = e.uint32();
                      break;
                    case 10:
                      a.body = e.string();
                      break;
                    case 11:
                      a.created = e.uint32();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.CommentIcon = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.id = 0),
              (e.prototype.imageUrl = ""),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.id &&
                    e.hasOwnProperty("id") &&
                    t.uint32(8).uint32(e.id),
                  null != e.imageUrl &&
                    e.hasOwnProperty("imageUrl") &&
                    t.uint32(18).string(e.imageUrl),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.CommentIcon();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.id = e.uint32();
                      break;
                    case 2:
                      a.imageUrl = e.string();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.Feedback = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.timeStamp = 0),
              (e.prototype.body = ""),
              (e.prototype.responseType = 0),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.timeStamp &&
                    e.hasOwnProperty("timeStamp") &&
                    t.uint32(8).uint32(e.timeStamp),
                  null != e.body &&
                    e.hasOwnProperty("body") &&
                    t.uint32(18).string(e.body),
                  null != e.responseType &&
                    e.hasOwnProperty("responseType") &&
                    t.uint32(24).int32(e.responseType),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.Feedback();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.timeStamp = e.uint32();
                      break;
                    case 2:
                      a.body = e.string();
                      break;
                    case 3:
                      a.responseType = e.int32();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              (e.ResponseType = (function () {
                var e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "QUESTION")] = 0), (t[(e[1] = "ANSWER")] = 1), t
                );
              })()),
              e
            );
          })()),
          (e.Page = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            var t;
            return (
              (e.prototype.mangaPage = null),
              (e.prototype.bannerList = null),
              (e.prototype.lastPage = null),
              (e.prototype.advertisement = null),
              Object.defineProperty(e.prototype, "data", {
                get: h.oneOfGetter(
                  (t = ["mangaPage", "bannerList", "lastPage", "advertisement"])
                ),
                set: h.oneOfSetter(t),
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.mangaPage &&
                    e.hasOwnProperty("mangaPage") &&
                    g.Proto.Page.MangaPage.encode(
                      e.mangaPage,
                      t.uint32(10).fork()
                    ).ldelim(),
                  null != e.bannerList &&
                    e.hasOwnProperty("bannerList") &&
                    g.Proto.Page.BannerList.encode(
                      e.bannerList,
                      t.uint32(18).fork()
                    ).ldelim(),
                  null != e.lastPage &&
                    e.hasOwnProperty("lastPage") &&
                    g.Proto.Page.LastPage.encode(
                      e.lastPage,
                      t.uint32(26).fork()
                    ).ldelim(),
                  null != e.advertisement &&
                    e.hasOwnProperty("advertisement") &&
                    g.Proto.AdNetworkList.encode(
                      e.advertisement,
                      t.uint32(34).fork()
                    ).ldelim(),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.Page();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.mangaPage = g.Proto.Page.MangaPage.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 2:
                      a.bannerList = g.Proto.Page.BannerList.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 3:
                      a.lastPage = g.Proto.Page.LastPage.decode(e, e.uint32());
                      break;
                    case 4:
                      a.advertisement = g.Proto.AdNetworkList.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              (e.MangaPage = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.imageUrl = ""),
                  (e.prototype.width = 0),
                  (e.prototype.height = 0),
                  (e.prototype.type = 0),
                  (e.prototype.encryptionKey = ""),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = m.create()),
                      null != e.imageUrl &&
                        e.hasOwnProperty("imageUrl") &&
                        t.uint32(10).string(e.imageUrl),
                      null != e.width &&
                        e.hasOwnProperty("width") &&
                        t.uint32(16).uint32(e.width),
                      null != e.height &&
                        e.hasOwnProperty("height") &&
                        t.uint32(24).uint32(e.height),
                      null != e.type &&
                        e.hasOwnProperty("type") &&
                        t.uint32(32).int32(e.type),
                      null != e.encryptionKey &&
                        e.hasOwnProperty("encryptionKey") &&
                        t.uint32(42).string(e.encryptionKey),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof p || (e = p.create(e));
                    var n = void 0 === t ? e.len : e.pos + t,
                      a = new g.Proto.Page.MangaPage();
                    while (e.pos < n) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          a.imageUrl = e.string();
                          break;
                        case 2:
                          a.width = e.uint32();
                          break;
                        case 3:
                          a.height = e.uint32();
                          break;
                        case 4:
                          a.type = e.int32();
                          break;
                        case 5:
                          a.encryptionKey = e.string();
                          break;
                        default:
                          e.skipType(7 & i);
                          break;
                      }
                    }
                    return a;
                  }),
                  e
                );
              })()),
              (e.LastPage = (function () {
                function e(e) {
                  if (((this.topComments = []), (this.banners = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.currentChapter = null),
                  (e.prototype.nextChapter = null),
                  (e.prototype.topComments = h.emptyArray),
                  (e.prototype.isSubscribed = !1),
                  (e.prototype.nextTimeStamp = 0),
                  (e.prototype.chapterType = 0),
                  (e.prototype.advertisement = null),
                  (e.prototype.movieReward = null),
                  (e.prototype.banners = h.emptyArray),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = m.create()),
                      null != e.currentChapter &&
                        e.hasOwnProperty("currentChapter") &&
                        g.Proto.Chapter.encode(
                          e.currentChapter,
                          t.uint32(10).fork()
                        ).ldelim(),
                      null != e.nextChapter &&
                        e.hasOwnProperty("nextChapter") &&
                        g.Proto.Chapter.encode(
                          e.nextChapter,
                          t.uint32(18).fork()
                        ).ldelim(),
                      null != e.topComments && e.topComments.length)
                    )
                      for (var n = 0; n < e.topComments.length; ++n)
                        g.Proto.Comment.encode(
                          e.topComments[n],
                          t.uint32(26).fork()
                        ).ldelim();
                    if (
                      (null != e.isSubscribed &&
                        e.hasOwnProperty("isSubscribed") &&
                        t.uint32(32).bool(e.isSubscribed),
                      null != e.nextTimeStamp &&
                        e.hasOwnProperty("nextTimeStamp") &&
                        t.uint32(40).uint32(e.nextTimeStamp),
                      null != e.chapterType &&
                        e.hasOwnProperty("chapterType") &&
                        t.uint32(48).int32(e.chapterType),
                      null != e.advertisement &&
                        e.hasOwnProperty("advertisement") &&
                        g.Proto.AdNetworkList.encode(
                          e.advertisement,
                          t.uint32(58).fork()
                        ).ldelim(),
                      null != e.movieReward &&
                        e.hasOwnProperty("movieReward") &&
                        g.Proto.Popup.encode(
                          e.movieReward,
                          t.uint32(66).fork()
                        ).ldelim(),
                      null != e.banners && e.banners.length)
                    )
                      for (n = 0; n < e.banners.length; ++n)
                        g.Proto.Banner.encode(
                          e.banners[n],
                          t.uint32(74).fork()
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof p || (e = p.create(e));
                    var n = void 0 === t ? e.len : e.pos + t,
                      a = new g.Proto.Page.LastPage();
                    while (e.pos < n) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          a.currentChapter = g.Proto.Chapter.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 2:
                          a.nextChapter = g.Proto.Chapter.decode(e, e.uint32());
                          break;
                        case 3:
                          (a.topComments && a.topComments.length) ||
                            (a.topComments = []),
                            a.topComments.push(
                              g.Proto.Comment.decode(e, e.uint32())
                            );
                          break;
                        case 4:
                          a.isSubscribed = e.bool();
                          break;
                        case 5:
                          a.nextTimeStamp = e.uint32();
                          break;
                        case 6:
                          a.chapterType = e.int32();
                          break;
                        case 7:
                          a.advertisement = g.Proto.AdNetworkList.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 8:
                          a.movieReward = g.Proto.Popup.decode(e, e.uint32());
                          break;
                        case 9:
                          (a.banners && a.banners.length) || (a.banners = []),
                            a.banners.push(
                              g.Proto.Banner.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & i);
                          break;
                      }
                    }
                    return a;
                  }),
                  e
                );
              })()),
              (e.BannerList = (function () {
                function e(e) {
                  if (((this.banners = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.bannerTitle = ""),
                  (e.prototype.banners = h.emptyArray),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = m.create()),
                      null != e.bannerTitle &&
                        e.hasOwnProperty("bannerTitle") &&
                        t.uint32(10).string(e.bannerTitle),
                      null != e.banners && e.banners.length)
                    )
                      for (var n = 0; n < e.banners.length; ++n)
                        g.Proto.Banner.encode(
                          e.banners[n],
                          t.uint32(18).fork()
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof p || (e = p.create(e));
                    var n = void 0 === t ? e.len : e.pos + t,
                      a = new g.Proto.Page.BannerList();
                    while (e.pos < n) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          a.bannerTitle = e.string();
                          break;
                        case 2:
                          (a.banners && a.banners.length) || (a.banners = []),
                            a.banners.push(
                              g.Proto.Banner.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & i);
                          break;
                      }
                    }
                    return a;
                  }),
                  e
                );
              })()),
              (e.ChapterType = (function () {
                var e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "LATEST")] = 0),
                  (t[(e[1] = "SEQUENCE")] = 1),
                  (t[(e[2] = "NOSEQUENCE")] = 2),
                  t
                );
              })()),
              (e.PageType = (function () {
                var e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "SINGLE")] = 0),
                  (t[(e[1] = "LEFT")] = 1),
                  (t[(e[2] = "RIGHT")] = 2),
                  (t[(e[3] = "DOUBLE")] = 3),
                  t
                );
              })()),
              e
            );
          })()),
          (e.Popup = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            var t;
            return (
              (e.prototype.osDefault = null),
              (e.prototype.appDefault = null),
              (e.prototype.movieReward = null),
              (e.prototype.oneImage = null),
              (e.prototype.popupId = 0),
              Object.defineProperty(e.prototype, "popup", {
                get: h.oneOfGetter(
                  (t = ["osDefault", "appDefault", "movieReward", "oneImage"])
                ),
                set: h.oneOfSetter(t),
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.osDefault &&
                    e.hasOwnProperty("osDefault") &&
                    g.Proto.Popup.OSDefault.encode(
                      e.osDefault,
                      t.uint32(10).fork()
                    ).ldelim(),
                  null != e.appDefault &&
                    e.hasOwnProperty("appDefault") &&
                    g.Proto.Popup.AppDefault.encode(
                      e.appDefault,
                      t.uint32(18).fork()
                    ).ldelim(),
                  null != e.movieReward &&
                    e.hasOwnProperty("movieReward") &&
                    g.Proto.MovieReward.encode(
                      e.movieReward,
                      t.uint32(26).fork()
                    ).ldelim(),
                  null != e.oneImage &&
                    e.hasOwnProperty("oneImage") &&
                    g.Proto.Popup.OneImage.encode(
                      e.oneImage,
                      t.uint32(34).fork()
                    ).ldelim(),
                  null != e.popupId &&
                    e.hasOwnProperty("popupId") &&
                    t.uint32(40).uint32(e.popupId),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.Popup();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.osDefault = g.Proto.Popup.OSDefault.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 2:
                      a.appDefault = g.Proto.Popup.AppDefault.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 3:
                      a.movieReward = g.Proto.MovieReward.decode(e, e.uint32());
                      break;
                    case 4:
                      a.oneImage = g.Proto.Popup.OneImage.decode(e, e.uint32());
                      break;
                    case 5:
                      a.popupId = e.uint32();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              (e.OSDefault = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.subject = ""),
                  (e.prototype.body = ""),
                  (e.prototype.okButton = null),
                  (e.prototype.neutralButton = null),
                  (e.prototype.cancelButton = null),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = m.create()),
                      null != e.subject &&
                        e.hasOwnProperty("subject") &&
                        t.uint32(10).string(e.subject),
                      null != e.body &&
                        e.hasOwnProperty("body") &&
                        t.uint32(18).string(e.body),
                      null != e.okButton &&
                        e.hasOwnProperty("okButton") &&
                        g.Proto.Popup.Button.encode(
                          e.okButton,
                          t.uint32(26).fork()
                        ).ldelim(),
                      null != e.neutralButton &&
                        e.hasOwnProperty("neutralButton") &&
                        g.Proto.Popup.Button.encode(
                          e.neutralButton,
                          t.uint32(34).fork()
                        ).ldelim(),
                      null != e.cancelButton &&
                        e.hasOwnProperty("cancelButton") &&
                        g.Proto.Popup.Button.encode(
                          e.cancelButton,
                          t.uint32(42).fork()
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof p || (e = p.create(e));
                    var n = void 0 === t ? e.len : e.pos + t,
                      a = new g.Proto.Popup.OSDefault();
                    while (e.pos < n) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          a.subject = e.string();
                          break;
                        case 2:
                          a.body = e.string();
                          break;
                        case 3:
                          a.okButton = g.Proto.Popup.Button.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 4:
                          a.neutralButton = g.Proto.Popup.Button.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 5:
                          a.cancelButton = g.Proto.Popup.Button.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        default:
                          e.skipType(7 & i);
                          break;
                      }
                    }
                    return a;
                  }),
                  e
                );
              })()),
              (e.AppDefault = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.subject = ""),
                  (e.prototype.body = ""),
                  (e.prototype.action = null),
                  (e.prototype.imageUrl = ""),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = m.create()),
                      null != e.subject &&
                        e.hasOwnProperty("subject") &&
                        t.uint32(10).string(e.subject),
                      null != e.body &&
                        e.hasOwnProperty("body") &&
                        t.uint32(18).string(e.body),
                      null != e.action &&
                        e.hasOwnProperty("action") &&
                        g.Proto.TransitionAction.encode(
                          e.action,
                          t.uint32(26).fork()
                        ).ldelim(),
                      null != e.imageUrl &&
                        e.hasOwnProperty("imageUrl") &&
                        t.uint32(34).string(e.imageUrl),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof p || (e = p.create(e));
                    var n = void 0 === t ? e.len : e.pos + t,
                      a = new g.Proto.Popup.AppDefault();
                    while (e.pos < n) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          a.subject = e.string();
                          break;
                        case 2:
                          a.body = e.string();
                          break;
                        case 3:
                          a.action = g.Proto.TransitionAction.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 4:
                          a.imageUrl = e.string();
                          break;
                        default:
                          e.skipType(7 & i);
                          break;
                      }
                    }
                    return a;
                  }),
                  e
                );
              })()),
              (e.OneImage = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.action = null),
                  (e.prototype.imageUrl = ""),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = m.create()),
                      null != e.action &&
                        e.hasOwnProperty("action") &&
                        g.Proto.TransitionAction.encode(
                          e.action,
                          t.uint32(10).fork()
                        ).ldelim(),
                      null != e.imageUrl &&
                        e.hasOwnProperty("imageUrl") &&
                        t.uint32(18).string(e.imageUrl),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof p || (e = p.create(e));
                    var n = void 0 === t ? e.len : e.pos + t,
                      a = new g.Proto.Popup.OneImage();
                    while (e.pos < n) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          a.action = g.Proto.TransitionAction.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        case 2:
                          a.imageUrl = e.string();
                          break;
                        default:
                          e.skipType(7 & i);
                          break;
                      }
                    }
                    return a;
                  }),
                  e
                );
              })()),
              (e.Button = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.text = ""),
                  (e.prototype.action = null),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = m.create()),
                      null != e.text &&
                        e.hasOwnProperty("text") &&
                        t.uint32(10).string(e.text),
                      null != e.action &&
                        e.hasOwnProperty("action") &&
                        g.Proto.TransitionAction.encode(
                          e.action,
                          t.uint32(18).fork()
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof p || (e = p.create(e));
                    var n = void 0 === t ? e.len : e.pos + t,
                      a = new g.Proto.Popup.Button();
                    while (e.pos < n) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          a.text = e.string();
                          break;
                        case 2:
                          a.action = g.Proto.TransitionAction.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        default:
                          e.skipType(7 & i);
                          break;
                      }
                    }
                    return a;
                  }),
                  e
                );
              })()),
              e
            );
          })()),
          (e.MovieReward = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.imageUrl = ""),
              (e.prototype.advertisement = null),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.imageUrl &&
                    e.hasOwnProperty("imageUrl") &&
                    t.uint32(10).string(e.imageUrl),
                  null != e.advertisement &&
                    e.hasOwnProperty("advertisement") &&
                    g.Proto.AdNetworkList.encode(
                      e.advertisement,
                      t.uint32(18).fork()
                    ).ldelim(),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.MovieReward();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.imageUrl = e.string();
                      break;
                    case 2:
                      a.advertisement = g.Proto.AdNetworkList.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.PublisherNews = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.id = 0),
              (e.prototype.publisherId = 0),
              (e.prototype.publisherName = ""),
              (e.prototype.subject = ""),
              (e.prototype.body = ""),
              (e.prototype.publishedTimeStamp = 0),
              (e.prototype.action = null),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.id &&
                    e.hasOwnProperty("id") &&
                    t.uint32(8).uint32(e.id),
                  null != e.publisherId &&
                    e.hasOwnProperty("publisherId") &&
                    t.uint32(16).uint32(e.publisherId),
                  null != e.publisherName &&
                    e.hasOwnProperty("publisherName") &&
                    t.uint32(26).string(e.publisherName),
                  null != e.subject &&
                    e.hasOwnProperty("subject") &&
                    t.uint32(34).string(e.subject),
                  null != e.body &&
                    e.hasOwnProperty("body") &&
                    t.uint32(42).string(e.body),
                  null != e.publishedTimeStamp &&
                    e.hasOwnProperty("publishedTimeStamp") &&
                    t.uint32(48).uint32(e.publishedTimeStamp),
                  null != e.action &&
                    e.hasOwnProperty("action") &&
                    g.Proto.TransitionAction.encode(
                      e.action,
                      t.uint32(58).fork()
                    ).ldelim(),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.PublisherNews();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.id = e.uint32();
                      break;
                    case 2:
                      a.publisherId = e.uint32();
                      break;
                    case 3:
                      a.publisherName = e.string();
                      break;
                    case 4:
                      a.subject = e.string();
                      break;
                    case 5:
                      a.body = e.string();
                      break;
                    case 6:
                      a.publishedTimeStamp = e.uint32();
                      break;
                    case 7:
                      a.action = g.Proto.TransitionAction.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.ServiceAnnouncement = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.title = ""),
              (e.prototype.body = ""),
              (e.prototype.date = 0),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.title &&
                    e.hasOwnProperty("title") &&
                    t.uint32(10).string(e.title),
                  null != e.body &&
                    e.hasOwnProperty("body") &&
                    t.uint32(18).string(e.body),
                  null != e.date &&
                    e.hasOwnProperty("date") &&
                    t.uint32(24).int32(e.date),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.ServiceAnnouncement();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.title = e.string();
                      break;
                    case 2:
                      a.body = e.string();
                      break;
                    case 3:
                      a.date = e.int32();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.Sns = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.body = ""),
              (e.prototype.url = ""),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.body &&
                    e.hasOwnProperty("body") &&
                    t.uint32(10).string(e.body),
                  null != e.url &&
                    e.hasOwnProperty("url") &&
                    t.uint32(18).string(e.url),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.Sns();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.body = e.string();
                      break;
                    case 2:
                      a.url = e.string();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.Title = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.titleId = 0),
              (e.prototype.name = ""),
              (e.prototype.author = ""),
              (e.prototype.portraitImageUrl = ""),
              (e.prototype.landscapeImageUrl = ""),
              (e.prototype.viewCount = 0),
              (e.prototype.language = 0),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.titleId &&
                    e.hasOwnProperty("titleId") &&
                    t.uint32(8).uint32(e.titleId),
                  null != e.name &&
                    e.hasOwnProperty("name") &&
                    t.uint32(18).string(e.name),
                  null != e.author &&
                    e.hasOwnProperty("author") &&
                    t.uint32(26).string(e.author),
                  null != e.portraitImageUrl &&
                    e.hasOwnProperty("portraitImageUrl") &&
                    t.uint32(34).string(e.portraitImageUrl),
                  null != e.landscapeImageUrl &&
                    e.hasOwnProperty("landscapeImageUrl") &&
                    t.uint32(42).string(e.landscapeImageUrl),
                  null != e.viewCount &&
                    e.hasOwnProperty("viewCount") &&
                    t.uint32(48).uint32(e.viewCount),
                  null != e.language &&
                    e.hasOwnProperty("language") &&
                    t.uint32(56).int32(e.language),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.Title();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.titleId = e.uint32();
                      break;
                    case 2:
                      a.name = e.string();
                      break;
                    case 3:
                      a.author = e.string();
                      break;
                    case 4:
                      a.portraitImageUrl = e.string();
                      break;
                    case 5:
                      a.landscapeImageUrl = e.string();
                      break;
                    case 6:
                      a.viewCount = e.uint32();
                      break;
                    case 7:
                      a.language = e.int32();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              (e.Language = (function () {
                var e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "ENGLISH")] = 0), (t[(e[1] = "SPANISH")] = 1), t
                );
              })()),
              e
            );
          })()),
          (e.TitleList = (function () {
            function e(e) {
              if (((this.featuredTitles = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.listName = ""),
              (e.prototype.featuredTitles = h.emptyArray),
              (e.encode = function (e, t) {
                if (
                  (t || (t = m.create()),
                  null != e.listName &&
                    e.hasOwnProperty("listName") &&
                    t.uint32(10).string(e.listName),
                  null != e.featuredTitles && e.featuredTitles.length)
                )
                  for (var n = 0; n < e.featuredTitles.length; ++n)
                    g.Proto.Title.encode(
                      e.featuredTitles[n],
                      t.uint32(18).fork()
                    ).ldelim();
                return t;
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.TitleList();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.listName = e.string();
                      break;
                    case 2:
                      (a.featuredTitles && a.featuredTitles.length) ||
                        (a.featuredTitles = []),
                        a.featuredTitles.push(
                          g.Proto.Title.decode(e, e.uint32())
                        );
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.TransitionAction = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.method = 0),
              (e.prototype.url = ""),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.method &&
                    e.hasOwnProperty("method") &&
                    t.uint32(8).int32(e.method),
                  null != e.url &&
                    e.hasOwnProperty("url") &&
                    t.uint32(18).string(e.url),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.TransitionAction();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.method = e.int32();
                      break;
                    case 2:
                      a.url = e.string();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              (e.PresentationMethod = (function () {
                var e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "PUSH")] = 0),
                  (t[(e[1] = "MODAL")] = 1),
                  (t[(e[2] = "EXTERNAL")] = 2),
                  t
                );
              })()),
              e
            );
          })()),
          (e.UpdatedTitle = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.title = null),
              (e.prototype.chapterId = 0),
              (e.prototype.chapterName = ""),
              (e.prototype.chapterSubTitle = ""),
              (e.prototype.isLatest = !1),
              (e.prototype.isVerticalOnly = !1),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.title &&
                    e.hasOwnProperty("title") &&
                    g.Proto.Title.encode(e.title, t.uint32(10).fork()).ldelim(),
                  null != e.chapterId &&
                    e.hasOwnProperty("chapterId") &&
                    t.uint32(16).uint32(e.chapterId),
                  null != e.chapterName &&
                    e.hasOwnProperty("chapterName") &&
                    t.uint32(26).string(e.chapterName),
                  null != e.chapterSubTitle &&
                    e.hasOwnProperty("chapterSubTitle") &&
                    t.uint32(34).string(e.chapterSubTitle),
                  null != e.isLatest &&
                    e.hasOwnProperty("isLatest") &&
                    t.uint32(40).bool(e.isLatest),
                  null != e.isVerticalOnly &&
                    e.hasOwnProperty("isVerticalOnly") &&
                    t.uint32(48).bool(e.isVerticalOnly),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.UpdatedTitle();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.title = g.Proto.Title.decode(e, e.uint32());
                      break;
                    case 2:
                      a.chapterId = e.uint32();
                      break;
                    case 3:
                      a.chapterName = e.string();
                      break;
                    case 4:
                      a.chapterSubTitle = e.string();
                      break;
                    case 5:
                      a.isLatest = e.bool();
                      break;
                    case 6:
                      a.isVerticalOnly = e.bool();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.UpdatedTitleGroup = (function () {
            function e(e) {
              if (((this.titles = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.groupName = ""),
              (e.prototype.titles = h.emptyArray),
              (e.encode = function (e, t) {
                if (
                  (t || (t = m.create()),
                  null != e.groupName &&
                    e.hasOwnProperty("groupName") &&
                    t.uint32(10).string(e.groupName),
                  null != e.titles && e.titles.length)
                )
                  for (var n = 0; n < e.titles.length; ++n)
                    g.Proto.UpdatedTitle.encode(
                      e.titles[n],
                      t.uint32(18).fork()
                    ).ldelim();
                return t;
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.UpdatedTitleGroup();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.groupName = e.string();
                      break;
                    case 2:
                      (a.titles && a.titles.length) || (a.titles = []),
                        a.titles.push(
                          g.Proto.UpdatedTitle.decode(e, e.uint32())
                        );
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.AllTitlesView = (function () {
            function e(e) {
              if (((this.titles = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.titles = h.emptyArray),
              (e.encode = function (e, t) {
                if (
                  (t || (t = m.create()), null != e.titles && e.titles.length)
                )
                  for (var n = 0; n < e.titles.length; ++n)
                    g.Proto.Title.encode(
                      e.titles[n],
                      t.uint32(10).fork()
                    ).ldelim();
                return t;
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.AllTitlesView();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      (a.titles && a.titles.length) || (a.titles = []),
                        a.titles.push(g.Proto.Title.decode(e, e.uint32()));
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.CommentListView = (function () {
            function e(e) {
              if (((this.comments = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.comments = h.emptyArray),
              (e.prototype.ifSetUserName = !1),
              (e.encode = function (e, t) {
                if (
                  (t || (t = m.create()),
                  null != e.comments && e.comments.length)
                )
                  for (var n = 0; n < e.comments.length; ++n)
                    g.Proto.Comment.encode(
                      e.comments[n],
                      t.uint32(10).fork()
                    ).ldelim();
                return (
                  null != e.ifSetUserName &&
                    e.hasOwnProperty("ifSetUserName") &&
                    t.uint32(16).bool(e.ifSetUserName),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.CommentListView();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      (a.comments && a.comments.length) || (a.comments = []),
                        a.comments.push(g.Proto.Comment.decode(e, e.uint32()));
                      break;
                    case 2:
                      a.ifSetUserName = e.bool();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.FeaturedTitlesView = (function () {
            function e(e) {
              if (((this.contents = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.mainBanner = null),
              (e.prototype.subBanner_1 = null),
              (e.prototype.subBanner_2 = null),
              (e.prototype.contents = h.emptyArray),
              (e.encode = function (e, t) {
                if (
                  (t || (t = m.create()),
                  null != e.mainBanner &&
                    e.hasOwnProperty("mainBanner") &&
                    g.Proto.Banner.encode(
                      e.mainBanner,
                      t.uint32(10).fork()
                    ).ldelim(),
                  null != e.subBanner_1 &&
                    e.hasOwnProperty("subBanner_1") &&
                    g.Proto.Banner.encode(
                      e.subBanner_1,
                      t.uint32(18).fork()
                    ).ldelim(),
                  null != e.subBanner_2 &&
                    e.hasOwnProperty("subBanner_2") &&
                    g.Proto.Banner.encode(
                      e.subBanner_2,
                      t.uint32(26).fork()
                    ).ldelim(),
                  null != e.contents && e.contents.length)
                )
                  for (var n = 0; n < e.contents.length; ++n)
                    g.Proto.FeaturedTitlesView.Contents.encode(
                      e.contents[n],
                      t.uint32(34).fork()
                    ).ldelim();
                return t;
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.FeaturedTitlesView();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.mainBanner = g.Proto.Banner.decode(e, e.uint32());
                      break;
                    case 2:
                      a.subBanner_1 = g.Proto.Banner.decode(e, e.uint32());
                      break;
                    case 3:
                      a.subBanner_2 = g.Proto.Banner.decode(e, e.uint32());
                      break;
                    case 4:
                      (a.contents && a.contents.length) || (a.contents = []),
                        a.contents.push(
                          g.Proto.FeaturedTitlesView.Contents.decode(
                            e,
                            e.uint32()
                          )
                        );
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              (e.Contents = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                var t;
                return (
                  (e.prototype.banner = null),
                  (e.prototype.titleList = null),
                  Object.defineProperty(e.prototype, "data", {
                    get: h.oneOfGetter((t = ["banner", "titleList"])),
                    set: h.oneOfSetter(t),
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = m.create()),
                      null != e.banner &&
                        e.hasOwnProperty("banner") &&
                        g.Proto.Banner.encode(
                          e.banner,
                          t.uint32(10).fork()
                        ).ldelim(),
                      null != e.titleList &&
                        e.hasOwnProperty("titleList") &&
                        g.Proto.TitleList.encode(
                          e.titleList,
                          t.uint32(18).fork()
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof p || (e = p.create(e));
                    var n = void 0 === t ? e.len : e.pos + t,
                      a = new g.Proto.FeaturedTitlesView.Contents();
                    while (e.pos < n) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          a.banner = g.Proto.Banner.decode(e, e.uint32());
                          break;
                        case 2:
                          a.titleList = g.Proto.TitleList.decode(e, e.uint32());
                          break;
                        default:
                          e.skipType(7 & i);
                          break;
                      }
                    }
                    return a;
                  }),
                  e
                );
              })()),
              e
            );
          })()),
          (e.FeedbackView = (function () {
            function e(e) {
              if (((this.feedbackList = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.feedbackList = h.emptyArray),
              (e.encode = function (e, t) {
                if (
                  (t || (t = m.create()),
                  null != e.feedbackList && e.feedbackList.length)
                )
                  for (var n = 0; n < e.feedbackList.length; ++n)
                    g.Proto.Feedback.encode(
                      e.feedbackList[n],
                      t.uint32(10).fork()
                    ).ldelim();
                return t;
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.FeedbackView();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      (a.feedbackList && a.feedbackList.length) ||
                        (a.feedbackList = []),
                        a.feedbackList.push(
                          g.Proto.Feedback.decode(e, e.uint32())
                        );
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.HomeView = (function () {
            function e(e) {
              if (((this.topBanners = []), (this.groups = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.topBanners = h.emptyArray),
              (e.prototype.groups = h.emptyArray),
              (e.prototype.popup = null),
              (e.encode = function (e, t) {
                if (
                  (t || (t = m.create()),
                  null != e.topBanners && e.topBanners.length)
                )
                  for (var n = 0; n < e.topBanners.length; ++n)
                    g.Proto.Banner.encode(
                      e.topBanners[n],
                      t.uint32(10).fork()
                    ).ldelim();
                if (null != e.groups && e.groups.length)
                  for (n = 0; n < e.groups.length; ++n)
                    g.Proto.UpdatedTitleGroup.encode(
                      e.groups[n],
                      t.uint32(18).fork()
                    ).ldelim();
                return (
                  null != e.popup &&
                    e.hasOwnProperty("popup") &&
                    g.Proto.Popup.encode(e.popup, t.uint32(74).fork()).ldelim(),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.HomeView();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      (a.topBanners && a.topBanners.length) ||
                        (a.topBanners = []),
                        a.topBanners.push(g.Proto.Banner.decode(e, e.uint32()));
                      break;
                    case 2:
                      (a.groups && a.groups.length) || (a.groups = []),
                        a.groups.push(
                          g.Proto.UpdatedTitleGroup.decode(e, e.uint32())
                        );
                      break;
                    case 9:
                      a.popup = g.Proto.Popup.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.InitialView = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.gdprAgreementRequired = !1),
              (e.prototype.englishTitlesCount = 0),
              (e.prototype.spanishTitlesCount = 0),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.gdprAgreementRequired &&
                    e.hasOwnProperty("gdprAgreementRequired") &&
                    t.uint32(8).bool(e.gdprAgreementRequired),
                  null != e.englishTitlesCount &&
                    e.hasOwnProperty("englishTitlesCount") &&
                    t.uint32(16).uint32(e.englishTitlesCount),
                  null != e.spanishTitlesCount &&
                    e.hasOwnProperty("spanishTitlesCount") &&
                    t.uint32(24).uint32(e.spanishTitlesCount),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.InitialView();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.gdprAgreementRequired = e.bool();
                      break;
                    case 2:
                      a.englishTitlesCount = e.uint32();
                      break;
                    case 3:
                      a.spanishTitlesCount = e.uint32();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.MangaViewer = (function () {
            function e(e) {
              if (((this.pages = []), (this.chapters = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.pages = h.emptyArray),
              (e.prototype.chapterId = 0),
              (e.prototype.chapters = h.emptyArray),
              (e.prototype.sns = null),
              (e.prototype.titleName = ""),
              (e.prototype.chapterName = ""),
              (e.prototype.numberOfComments = 0),
              (e.prototype.isVerticalOnly = !1),
              (e.prototype.titleId = 0),
              (e.prototype.startFromRight = !1),
              (e.encode = function (e, t) {
                if ((t || (t = m.create()), null != e.pages && e.pages.length))
                  for (var n = 0; n < e.pages.length; ++n)
                    g.Proto.Page.encode(
                      e.pages[n],
                      t.uint32(10).fork()
                    ).ldelim();
                if (
                  (null != e.chapterId &&
                    e.hasOwnProperty("chapterId") &&
                    t.uint32(16).uint32(e.chapterId),
                  null != e.chapters && e.chapters.length)
                )
                  for (n = 0; n < e.chapters.length; ++n)
                    g.Proto.Chapter.encode(
                      e.chapters[n],
                      t.uint32(26).fork()
                    ).ldelim();
                return (
                  null != e.sns &&
                    e.hasOwnProperty("sns") &&
                    g.Proto.Sns.encode(e.sns, t.uint32(34).fork()).ldelim(),
                  null != e.titleName &&
                    e.hasOwnProperty("titleName") &&
                    t.uint32(42).string(e.titleName),
                  null != e.chapterName &&
                    e.hasOwnProperty("chapterName") &&
                    t.uint32(50).string(e.chapterName),
                  null != e.numberOfComments &&
                    e.hasOwnProperty("numberOfComments") &&
                    t.uint32(56).uint32(e.numberOfComments),
                  null != e.isVerticalOnly &&
                    e.hasOwnProperty("isVerticalOnly") &&
                    t.uint32(64).bool(e.isVerticalOnly),
                  null != e.titleId &&
                    e.hasOwnProperty("titleId") &&
                    t.uint32(72).uint32(e.titleId),
                  null != e.startFromRight &&
                    e.hasOwnProperty("startFromRight") &&
                    t.uint32(80).bool(e.startFromRight),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.MangaViewer();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      (a.pages && a.pages.length) || (a.pages = []),
                        a.pages.push(g.Proto.Page.decode(e, e.uint32()));
                      break;
                    case 2:
                      a.chapterId = e.uint32();
                      break;
                    case 3:
                      (a.chapters && a.chapters.length) || (a.chapters = []),
                        a.chapters.push(g.Proto.Chapter.decode(e, e.uint32()));
                      break;
                    case 4:
                      a.sns = g.Proto.Sns.decode(e, e.uint32());
                      break;
                    case 5:
                      a.titleName = e.string();
                      break;
                    case 6:
                      a.chapterName = e.string();
                      break;
                    case 7:
                      a.numberOfComments = e.uint32();
                      break;
                    case 8:
                      a.isVerticalOnly = e.bool();
                      break;
                    case 9:
                      a.titleId = e.uint32();
                      break;
                    case 10:
                      a.startFromRight = e.bool();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.ProfileSettingsView = (function () {
            function e(e) {
              if (((this.iconList = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.iconList = h.emptyArray),
              (e.prototype.userName = ""),
              (e.prototype.myIcon = null),
              (e.encode = function (e, t) {
                if (
                  (t || (t = m.create()),
                  null != e.iconList && e.iconList.length)
                )
                  for (var n = 0; n < e.iconList.length; ++n)
                    g.Proto.CommentIcon.encode(
                      e.iconList[n],
                      t.uint32(10).fork()
                    ).ldelim();
                return (
                  null != e.userName &&
                    e.hasOwnProperty("userName") &&
                    t.uint32(18).string(e.userName),
                  null != e.myIcon &&
                    e.hasOwnProperty("myIcon") &&
                    g.Proto.CommentIcon.encode(
                      e.myIcon,
                      t.uint32(26).fork()
                    ).ldelim(),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.ProfileSettingsView();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      (a.iconList && a.iconList.length) || (a.iconList = []),
                        a.iconList.push(
                          g.Proto.CommentIcon.decode(e, e.uint32())
                        );
                      break;
                    case 2:
                      a.userName = e.string();
                      break;
                    case 3:
                      a.myIcon = g.Proto.CommentIcon.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.PublisherNewsListView = (function () {
            function e(e) {
              if (((this.newsList = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.publisherId = 0),
              (e.prototype.publisherName = ""),
              (e.prototype.banner = null),
              (e.prototype.newsList = h.emptyArray),
              (e.encode = function (e, t) {
                if (
                  (t || (t = m.create()),
                  null != e.publisherId &&
                    e.hasOwnProperty("publisherId") &&
                    t.uint32(8).uint32(e.publisherId),
                  null != e.publisherName &&
                    e.hasOwnProperty("publisherName") &&
                    t.uint32(18).string(e.publisherName),
                  null != e.banner &&
                    e.hasOwnProperty("banner") &&
                    g.Proto.Banner.encode(
                      e.banner,
                      t.uint32(26).fork()
                    ).ldelim(),
                  null != e.newsList && e.newsList.length)
                )
                  for (var n = 0; n < e.newsList.length; ++n)
                    g.Proto.PublisherNews.encode(
                      e.newsList[n],
                      t.uint32(34).fork()
                    ).ldelim();
                return t;
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.PublisherNewsListView();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.publisherId = e.uint32();
                      break;
                    case 2:
                      a.publisherName = e.string();
                      break;
                    case 3:
                      a.banner = g.Proto.Banner.decode(e, e.uint32());
                      break;
                    case 4:
                      (a.newsList && a.newsList.length) || (a.newsList = []),
                        a.newsList.push(
                          g.Proto.PublisherNews.decode(e, e.uint32())
                        );
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.QuestionnaireView = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.isAnswered = !1),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.isAnswered &&
                    e.hasOwnProperty("isAnswered") &&
                    t.uint32(8).bool(e.isAnswered),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.QuestionnaireView();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.isAnswered = e.bool();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.RegistrationData = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.deviceSecret = ""),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.deviceSecret &&
                    e.hasOwnProperty("deviceSecret") &&
                    t.uint32(10).string(e.deviceSecret),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.RegistrationData();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.deviceSecret = e.string();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.ServiceAnnouncementsView = (function () {
            function e(e) {
              if (((this.serviceAnnouncements = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.serviceAnnouncements = h.emptyArray),
              (e.encode = function (e, t) {
                if (
                  (t || (t = m.create()),
                  null != e.serviceAnnouncements &&
                    e.serviceAnnouncements.length)
                )
                  for (var n = 0; n < e.serviceAnnouncements.length; ++n)
                    g.Proto.ServiceAnnouncement.encode(
                      e.serviceAnnouncements[n],
                      t.uint32(10).fork()
                    ).ldelim();
                return t;
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.ServiceAnnouncementsView();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      (a.serviceAnnouncements &&
                        a.serviceAnnouncements.length) ||
                        (a.serviceAnnouncements = []),
                        a.serviceAnnouncements.push(
                          g.Proto.ServiceAnnouncement.decode(e, e.uint32())
                        );
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.SettingsView = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.myIcon = null),
              (e.prototype.userName = ""),
              (e.prototype.noticeOfNewsAndEvents = !1),
              (e.prototype.noticeOfUpdatesOfSubscribedTitles = !1),
              (e.prototype.englishTitlesCount = 0),
              (e.prototype.spanishTitlesCount = 0),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.myIcon &&
                    e.hasOwnProperty("myIcon") &&
                    g.Proto.CommentIcon.encode(
                      e.myIcon,
                      t.uint32(10).fork()
                    ).ldelim(),
                  null != e.userName &&
                    e.hasOwnProperty("userName") &&
                    t.uint32(18).string(e.userName),
                  null != e.noticeOfNewsAndEvents &&
                    e.hasOwnProperty("noticeOfNewsAndEvents") &&
                    t.uint32(24).bool(e.noticeOfNewsAndEvents),
                  null != e.noticeOfUpdatesOfSubscribedTitles &&
                    e.hasOwnProperty("noticeOfUpdatesOfSubscribedTitles") &&
                    t.uint32(32).bool(e.noticeOfUpdatesOfSubscribedTitles),
                  null != e.englishTitlesCount &&
                    e.hasOwnProperty("englishTitlesCount") &&
                    t.uint32(40).uint32(e.englishTitlesCount),
                  null != e.spanishTitlesCount &&
                    e.hasOwnProperty("spanishTitlesCount") &&
                    t.uint32(48).uint32(e.spanishTitlesCount),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.SettingsView();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.myIcon = g.Proto.CommentIcon.decode(e, e.uint32());
                      break;
                    case 2:
                      a.userName = e.string();
                      break;
                    case 3:
                      a.noticeOfNewsAndEvents = e.bool();
                      break;
                    case 4:
                      a.noticeOfUpdatesOfSubscribedTitles = e.bool();
                      break;
                    case 5:
                      a.englishTitlesCount = e.uint32();
                      break;
                    case 6:
                      a.spanishTitlesCount = e.uint32();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.SubscribedTitlesView = (function () {
            function e(e) {
              if (((this.titles = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.titles = h.emptyArray),
              (e.encode = function (e, t) {
                if (
                  (t || (t = m.create()), null != e.titles && e.titles.length)
                )
                  for (var n = 0; n < e.titles.length; ++n)
                    g.Proto.Title.encode(
                      e.titles[n],
                      t.uint32(10).fork()
                    ).ldelim();
                return t;
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.SubscribedTitlesView();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      (a.titles && a.titles.length) || (a.titles = []),
                        a.titles.push(g.Proto.Title.decode(e, e.uint32()));
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.TitleDetailView = (function () {
            function e(e) {
              if (
                ((this.firstChapterList = []),
                (this.lastChapterList = []),
                (this.banners = []),
                (this.recommendedTitleList = []),
                (this.publisherItems = []),
                (this.titleBanners = []),
                e)
              )
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.title = null),
              (e.prototype.titleImageUrl = ""),
              (e.prototype.overview = ""),
              (e.prototype.backgroundImageUrl = ""),
              (e.prototype.nextTimeStamp = 0),
              (e.prototype.updateTiming = 0),
              (e.prototype.viewingPeriodDescription = ""),
              (e.prototype.nonAppearanceInfo = ""),
              (e.prototype.firstChapterList = h.emptyArray),
              (e.prototype.lastChapterList = h.emptyArray),
              (e.prototype.banners = h.emptyArray),
              (e.prototype.recommendedTitleList = h.emptyArray),
              (e.prototype.sns = null),
              (e.prototype.isSimulReleased = !1),
              (e.prototype.isSubscribed = !1),
              (e.prototype.rating = 0),
              (e.prototype.chaptersDescending = !1),
              (e.prototype.numberOfViews = 0),
              (e.prototype.publisherItems = h.emptyArray),
              (e.prototype.titleBanners = h.emptyArray),
              (e.encode = function (e, t) {
                if (
                  (t || (t = m.create()),
                  null != e.title &&
                    e.hasOwnProperty("title") &&
                    g.Proto.Title.encode(e.title, t.uint32(10).fork()).ldelim(),
                  null != e.titleImageUrl &&
                    e.hasOwnProperty("titleImageUrl") &&
                    t.uint32(18).string(e.titleImageUrl),
                  null != e.overview &&
                    e.hasOwnProperty("overview") &&
                    t.uint32(26).string(e.overview),
                  null != e.backgroundImageUrl &&
                    e.hasOwnProperty("backgroundImageUrl") &&
                    t.uint32(34).string(e.backgroundImageUrl),
                  null != e.nextTimeStamp &&
                    e.hasOwnProperty("nextTimeStamp") &&
                    t.uint32(40).uint32(e.nextTimeStamp),
                  null != e.updateTiming &&
                    e.hasOwnProperty("updateTiming") &&
                    t.uint32(48).int32(e.updateTiming),
                  null != e.viewingPeriodDescription &&
                    e.hasOwnProperty("viewingPeriodDescription") &&
                    t.uint32(58).string(e.viewingPeriodDescription),
                  null != e.nonAppearanceInfo &&
                    e.hasOwnProperty("nonAppearanceInfo") &&
                    t.uint32(66).string(e.nonAppearanceInfo),
                  null != e.firstChapterList && e.firstChapterList.length)
                )
                  for (var n = 0; n < e.firstChapterList.length; ++n)
                    g.Proto.Chapter.encode(
                      e.firstChapterList[n],
                      t.uint32(74).fork()
                    ).ldelim();
                if (null != e.lastChapterList && e.lastChapterList.length)
                  for (n = 0; n < e.lastChapterList.length; ++n)
                    g.Proto.Chapter.encode(
                      e.lastChapterList[n],
                      t.uint32(82).fork()
                    ).ldelim();
                if (null != e.banners && e.banners.length)
                  for (n = 0; n < e.banners.length; ++n)
                    g.Proto.Banner.encode(
                      e.banners[n],
                      t.uint32(90).fork()
                    ).ldelim();
                if (
                  null != e.recommendedTitleList &&
                  e.recommendedTitleList.length
                )
                  for (n = 0; n < e.recommendedTitleList.length; ++n)
                    g.Proto.Title.encode(
                      e.recommendedTitleList[n],
                      t.uint32(98).fork()
                    ).ldelim();
                if (
                  (null != e.sns &&
                    e.hasOwnProperty("sns") &&
                    g.Proto.Sns.encode(e.sns, t.uint32(106).fork()).ldelim(),
                  null != e.isSimulReleased &&
                    e.hasOwnProperty("isSimulReleased") &&
                    t.uint32(112).bool(e.isSimulReleased),
                  null != e.isSubscribed &&
                    e.hasOwnProperty("isSubscribed") &&
                    t.uint32(120).bool(e.isSubscribed),
                  null != e.rating &&
                    e.hasOwnProperty("rating") &&
                    t.uint32(128).int32(e.rating),
                  null != e.chaptersDescending &&
                    e.hasOwnProperty("chaptersDescending") &&
                    t.uint32(136).bool(e.chaptersDescending),
                  null != e.numberOfViews &&
                    e.hasOwnProperty("numberOfViews") &&
                    t.uint32(144).uint32(e.numberOfViews),
                  null != e.publisherItems && e.publisherItems.length)
                )
                  for (n = 0; n < e.publisherItems.length; ++n)
                    g.Proto.TitleDetailView.PublisherItem.encode(
                      e.publisherItems[n],
                      t.uint32(154).fork()
                    ).ldelim();
                if (null != e.titleBanners && e.titleBanners.length)
                  for (n = 0; n < e.titleBanners.length; ++n)
                    g.Proto.Banner.encode(
                      e.titleBanners[n],
                      t.uint32(162).fork()
                    ).ldelim();
                return t;
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.TitleDetailView();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.title = g.Proto.Title.decode(e, e.uint32());
                      break;
                    case 2:
                      a.titleImageUrl = e.string();
                      break;
                    case 3:
                      a.overview = e.string();
                      break;
                    case 4:
                      a.backgroundImageUrl = e.string();
                      break;
                    case 5:
                      a.nextTimeStamp = e.uint32();
                      break;
                    case 6:
                      a.updateTiming = e.int32();
                      break;
                    case 7:
                      a.viewingPeriodDescription = e.string();
                      break;
                    case 8:
                      a.nonAppearanceInfo = e.string();
                      break;
                    case 9:
                      (a.firstChapterList && a.firstChapterList.length) ||
                        (a.firstChapterList = []),
                        a.firstChapterList.push(
                          g.Proto.Chapter.decode(e, e.uint32())
                        );
                      break;
                    case 10:
                      (a.lastChapterList && a.lastChapterList.length) ||
                        (a.lastChapterList = []),
                        a.lastChapterList.push(
                          g.Proto.Chapter.decode(e, e.uint32())
                        );
                      break;
                    case 11:
                      (a.banners && a.banners.length) || (a.banners = []),
                        a.banners.push(g.Proto.Banner.decode(e, e.uint32()));
                      break;
                    case 12:
                      (a.recommendedTitleList &&
                        a.recommendedTitleList.length) ||
                        (a.recommendedTitleList = []),
                        a.recommendedTitleList.push(
                          g.Proto.Title.decode(e, e.uint32())
                        );
                      break;
                    case 13:
                      a.sns = g.Proto.Sns.decode(e, e.uint32());
                      break;
                    case 14:
                      a.isSimulReleased = e.bool();
                      break;
                    case 15:
                      a.isSubscribed = e.bool();
                      break;
                    case 16:
                      a.rating = e.int32();
                      break;
                    case 17:
                      a.chaptersDescending = e.bool();
                      break;
                    case 18:
                      a.numberOfViews = e.uint32();
                      break;
                    case 19:
                      (a.publisherItems && a.publisherItems.length) ||
                        (a.publisherItems = []),
                        a.publisherItems.push(
                          g.Proto.TitleDetailView.PublisherItem.decode(
                            e,
                            e.uint32()
                          )
                        );
                      break;
                    case 20:
                      (a.titleBanners && a.titleBanners.length) ||
                        (a.titleBanners = []),
                        a.titleBanners.push(
                          g.Proto.Banner.decode(e, e.uint32())
                        );
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              (e.UpdateTiming = (function () {
                var e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "NOT_REGULARLY")] = 0),
                  (t[(e[1] = "MONDAY")] = 1),
                  (t[(e[2] = "TUESDAY")] = 2),
                  (t[(e[3] = "WEDNESDAY")] = 3),
                  (t[(e[4] = "THURSDAY")] = 4),
                  (t[(e[5] = "FRIDAY")] = 5),
                  (t[(e[6] = "SATURDAY")] = 6),
                  (t[(e[7] = "SUNDAY")] = 7),
                  (t[(e[8] = "DAY")] = 8),
                  t
                );
              })()),
              (e.Rating = (function () {
                var e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "ALLAGE")] = 0),
                  (t[(e[1] = "TEEN")] = 1),
                  (t[(e[2] = "TEENPLUS")] = 2),
                  (t[(e[3] = "MATURE")] = 3),
                  t
                );
              })()),
              (e.PublisherItem = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.banner = null),
                  (e.prototype.publisherNews = null),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = m.create()),
                      null != e.banner &&
                        e.hasOwnProperty("banner") &&
                        g.Proto.Banner.encode(
                          e.banner,
                          t.uint32(10).fork()
                        ).ldelim(),
                      null != e.publisherNews &&
                        e.hasOwnProperty("publisherNews") &&
                        g.Proto.PublisherNews.encode(
                          e.publisherNews,
                          t.uint32(18).fork()
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof p || (e = p.create(e));
                    var n = void 0 === t ? e.len : e.pos + t,
                      a = new g.Proto.TitleDetailView.PublisherItem();
                    while (e.pos < n) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          a.banner = g.Proto.Banner.decode(e, e.uint32());
                          break;
                        case 2:
                          a.publisherNews = g.Proto.PublisherNews.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        default:
                          e.skipType(7 & i);
                          break;
                      }
                    }
                    return a;
                  }),
                  e
                );
              })()),
              e
            );
          })()),
          (e.TitleRankingView = (function () {
            function e(e) {
              if (((this.titles = []), e))
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.titles = h.emptyArray),
              (e.encode = function (e, t) {
                if (
                  (t || (t = m.create()), null != e.titles && e.titles.length)
                )
                  for (var n = 0; n < e.titles.length; ++n)
                    g.Proto.Title.encode(
                      e.titles[n],
                      t.uint32(10).fork()
                    ).ldelim();
                return t;
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.TitleRankingView();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      (a.titles && a.titles.length) || (a.titles = []),
                        a.titles.push(g.Proto.Title.decode(e, e.uint32()));
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.UpdateProfileResultView = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.result = 0),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.result &&
                    e.hasOwnProperty("result") &&
                    t.uint32(8).int32(e.result),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.UpdateProfileResultView();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.result = e.int32();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              (e.Result = (function () {
                var e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "SUCCESS")] = 0),
                  (t[(e[1] = "DUPLICATED")] = 1),
                  (t[(e[2] = "NG_WORD")] = 2),
                  t
                );
              })()),
              e
            );
          })()),
          (e.ErrorResult = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.action = 0),
              (e.prototype.englishPopup = null),
              (e.prototype.spanishPopup = null),
              (e.prototype.debugInfo = ""),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.action &&
                    e.hasOwnProperty("action") &&
                    t.uint32(8).int32(e.action),
                  null != e.englishPopup &&
                    e.hasOwnProperty("englishPopup") &&
                    g.Proto.Popup.OSDefault.encode(
                      e.englishPopup,
                      t.uint32(18).fork()
                    ).ldelim(),
                  null != e.spanishPopup &&
                    e.hasOwnProperty("spanishPopup") &&
                    g.Proto.Popup.OSDefault.encode(
                      e.spanishPopup,
                      t.uint32(26).fork()
                    ).ldelim(),
                  null != e.debugInfo &&
                    e.hasOwnProperty("debugInfo") &&
                    t.uint32(34).string(e.debugInfo),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.ErrorResult();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.action = e.int32();
                      break;
                    case 2:
                      a.englishPopup = g.Proto.Popup.OSDefault.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 3:
                      a.spanishPopup = g.Proto.Popup.OSDefault.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 4:
                      a.debugInfo = e.string();
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              (e.Action = (function () {
                var e = {},
                  t = Object.create(e);
                return (
                  (t[(e[0] = "DEFAULT")] = 0),
                  (t[(e[1] = "UNAUTHORIZED")] = 1),
                  (t[(e[2] = "MAINTENANCE")] = 2),
                  (t[(e[3] = "GEOIP_BLOCKING")] = 3),
                  t
                );
              })()),
              e
            );
          })()),
          (e.Response = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            var t;
            return (
              (e.prototype.success = null),
              (e.prototype.error = null),
              Object.defineProperty(e.prototype, "result", {
                get: h.oneOfGetter((t = ["success", "error"])),
                set: h.oneOfSetter(t),
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.success &&
                    e.hasOwnProperty("success") &&
                    g.Proto.SuccessResult.encode(
                      e.success,
                      t.uint32(10).fork()
                    ).ldelim(),
                  null != e.error &&
                    e.hasOwnProperty("error") &&
                    g.Proto.ErrorResult.encode(
                      e.error,
                      t.uint32(18).fork()
                    ).ldelim(),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.Response();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.success = g.Proto.SuccessResult.decode(e, e.uint32());
                      break;
                    case 2:
                      a.error = g.Proto.ErrorResult.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.SuccessResult = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            var t;
            return (
              (e.prototype.isFeaturedUpdated = !1),
              (e.prototype.registerationData = null),
              (e.prototype.homeView = null),
              (e.prototype.featuredTitlesView = null),
              (e.prototype.allTitlesView = null),
              (e.prototype.titleRankingView = null),
              (e.prototype.subscribedTitlesView = null),
              (e.prototype.titleDetailView = null),
              (e.prototype.commentListView = null),
              (e.prototype.mangaViewer = null),
              (e.prototype.webHomeView = null),
              (e.prototype.settingsView = null),
              (e.prototype.profileSettingsView = null),
              (e.prototype.updateProfileResultView = null),
              (e.prototype.serviceAnnouncementsView = null),
              (e.prototype.initialView = null),
              (e.prototype.feedbackView = null),
              (e.prototype.publisherNewsListView = null),
              (e.prototype.questionnaireView = null),
              Object.defineProperty(e.prototype, "data", {
                get: h.oneOfGetter(
                  (t = [
                    "registerationData",
                    "homeView",
                    "featuredTitlesView",
                    "allTitlesView",
                    "titleRankingView",
                    "subscribedTitlesView",
                    "titleDetailView",
                    "commentListView",
                    "mangaViewer",
                    "webHomeView",
                    "settingsView",
                    "profileSettingsView",
                    "updateProfileResultView",
                    "serviceAnnouncementsView",
                    "initialView",
                    "feedbackView",
                    "publisherNewsListView",
                    "questionnaireView",
                  ])
                ),
                set: h.oneOfSetter(t),
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = m.create()),
                  null != e.isFeaturedUpdated &&
                    e.hasOwnProperty("isFeaturedUpdated") &&
                    t.uint32(8).bool(e.isFeaturedUpdated),
                  null != e.registerationData &&
                    e.hasOwnProperty("registerationData") &&
                    g.Proto.RegistrationData.encode(
                      e.registerationData,
                      t.uint32(18).fork()
                    ).ldelim(),
                  null != e.homeView &&
                    e.hasOwnProperty("homeView") &&
                    g.Proto.HomeView.encode(
                      e.homeView,
                      t.uint32(26).fork()
                    ).ldelim(),
                  null != e.featuredTitlesView &&
                    e.hasOwnProperty("featuredTitlesView") &&
                    g.Proto.FeaturedTitlesView.encode(
                      e.featuredTitlesView,
                      t.uint32(34).fork()
                    ).ldelim(),
                  null != e.allTitlesView &&
                    e.hasOwnProperty("allTitlesView") &&
                    g.Proto.AllTitlesView.encode(
                      e.allTitlesView,
                      t.uint32(42).fork()
                    ).ldelim(),
                  null != e.titleRankingView &&
                    e.hasOwnProperty("titleRankingView") &&
                    g.Proto.TitleRankingView.encode(
                      e.titleRankingView,
                      t.uint32(50).fork()
                    ).ldelim(),
                  null != e.subscribedTitlesView &&
                    e.hasOwnProperty("subscribedTitlesView") &&
                    g.Proto.SubscribedTitlesView.encode(
                      e.subscribedTitlesView,
                      t.uint32(58).fork()
                    ).ldelim(),
                  null != e.titleDetailView &&
                    e.hasOwnProperty("titleDetailView") &&
                    g.Proto.TitleDetailView.encode(
                      e.titleDetailView,
                      t.uint32(66).fork()
                    ).ldelim(),
                  null != e.commentListView &&
                    e.hasOwnProperty("commentListView") &&
                    g.Proto.CommentListView.encode(
                      e.commentListView,
                      t.uint32(74).fork()
                    ).ldelim(),
                  null != e.mangaViewer &&
                    e.hasOwnProperty("mangaViewer") &&
                    g.Proto.MangaViewer.encode(
                      e.mangaViewer,
                      t.uint32(82).fork()
                    ).ldelim(),
                  null != e.webHomeView &&
                    e.hasOwnProperty("webHomeView") &&
                    g.Proto.WebHomeView.encode(
                      e.webHomeView,
                      t.uint32(90).fork()
                    ).ldelim(),
                  null != e.settingsView &&
                    e.hasOwnProperty("settingsView") &&
                    g.Proto.SettingsView.encode(
                      e.settingsView,
                      t.uint32(98).fork()
                    ).ldelim(),
                  null != e.profileSettingsView &&
                    e.hasOwnProperty("profileSettingsView") &&
                    g.Proto.ProfileSettingsView.encode(
                      e.profileSettingsView,
                      t.uint32(106).fork()
                    ).ldelim(),
                  null != e.updateProfileResultView &&
                    e.hasOwnProperty("updateProfileResultView") &&
                    g.Proto.UpdateProfileResultView.encode(
                      e.updateProfileResultView,
                      t.uint32(114).fork()
                    ).ldelim(),
                  null != e.serviceAnnouncementsView &&
                    e.hasOwnProperty("serviceAnnouncementsView") &&
                    g.Proto.ServiceAnnouncementsView.encode(
                      e.serviceAnnouncementsView,
                      t.uint32(122).fork()
                    ).ldelim(),
                  null != e.initialView &&
                    e.hasOwnProperty("initialView") &&
                    g.Proto.InitialView.encode(
                      e.initialView,
                      t.uint32(130).fork()
                    ).ldelim(),
                  null != e.feedbackView &&
                    e.hasOwnProperty("feedbackView") &&
                    g.Proto.FeedbackView.encode(
                      e.feedbackView,
                      t.uint32(138).fork()
                    ).ldelim(),
                  null != e.publisherNewsListView &&
                    e.hasOwnProperty("publisherNewsListView") &&
                    g.Proto.PublisherNewsListView.encode(
                      e.publisherNewsListView,
                      t.uint32(146).fork()
                    ).ldelim(),
                  null != e.questionnaireView &&
                    e.hasOwnProperty("questionnaireView") &&
                    g.Proto.QuestionnaireView.encode(
                      e.questionnaireView,
                      t.uint32(154).fork()
                    ).ldelim(),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.SuccessResult();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      a.isFeaturedUpdated = e.bool();
                      break;
                    case 2:
                      a.registerationData = g.Proto.RegistrationData.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 3:
                      a.homeView = g.Proto.HomeView.decode(e, e.uint32());
                      break;
                    case 4:
                      a.featuredTitlesView = g.Proto.FeaturedTitlesView.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 5:
                      a.allTitlesView = g.Proto.AllTitlesView.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 6:
                      a.titleRankingView = g.Proto.TitleRankingView.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 7:
                      a.subscribedTitlesView = g.Proto.SubscribedTitlesView.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 8:
                      a.titleDetailView = g.Proto.TitleDetailView.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 9:
                      a.commentListView = g.Proto.CommentListView.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 10:
                      a.mangaViewer = g.Proto.MangaViewer.decode(e, e.uint32());
                      break;
                    case 11:
                      a.webHomeView = g.Proto.WebHomeView.decode(e, e.uint32());
                      break;
                    case 12:
                      a.settingsView = g.Proto.SettingsView.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 13:
                      a.profileSettingsView = g.Proto.ProfileSettingsView.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 14:
                      a.updateProfileResultView = g.Proto.UpdateProfileResultView.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 15:
                      a.serviceAnnouncementsView = g.Proto.ServiceAnnouncementsView.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 16:
                      a.initialView = g.Proto.InitialView.decode(e, e.uint32());
                      break;
                    case 17:
                      a.feedbackView = g.Proto.FeedbackView.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 18:
                      a.publisherNewsListView = g.Proto.PublisherNewsListView.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    case 19:
                      a.questionnaireView = g.Proto.QuestionnaireView.decode(
                        e,
                        e.uint32()
                      );
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          (e.WebHomeView = (function () {
            function e(e) {
              if (
                ((this.topBanners = []),
                (this.groups = []),
                (this.ranking = []),
                e)
              )
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  null != e[t[n]] && (this[t[n]] = e[t[n]]);
            }
            return (
              (e.prototype.topBanners = h.emptyArray),
              (e.prototype.groups = h.emptyArray),
              (e.prototype.ranking = h.emptyArray),
              (e.prototype.popup = null),
              (e.encode = function (e, t) {
                if (
                  (t || (t = m.create()),
                  null != e.topBanners && e.topBanners.length)
                )
                  for (var n = 0; n < e.topBanners.length; ++n)
                    g.Proto.Banner.encode(
                      e.topBanners[n],
                      t.uint32(10).fork()
                    ).ldelim();
                if (null != e.groups && e.groups.length)
                  for (n = 0; n < e.groups.length; ++n)
                    g.Proto.UpdatedTitleGroup.encode(
                      e.groups[n],
                      t.uint32(18).fork()
                    ).ldelim();
                if (null != e.ranking && e.ranking.length)
                  for (n = 0; n < e.ranking.length; ++n)
                    g.Proto.Title.encode(
                      e.ranking[n],
                      t.uint32(26).fork()
                    ).ldelim();
                return (
                  null != e.popup &&
                    e.hasOwnProperty("popup") &&
                    g.Proto.Popup.encode(e.popup, t.uint32(34).fork()).ldelim(),
                  t
                );
              }),
              (e.decode = function (e, t) {
                e instanceof p || (e = p.create(e));
                var n = void 0 === t ? e.len : e.pos + t,
                  a = new g.Proto.WebHomeView();
                while (e.pos < n) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      (a.topBanners && a.topBanners.length) ||
                        (a.topBanners = []),
                        a.topBanners.push(g.Proto.Banner.decode(e, e.uint32()));
                      break;
                    case 2:
                      (a.groups && a.groups.length) || (a.groups = []),
                        a.groups.push(
                          g.Proto.UpdatedTitleGroup.decode(e, e.uint32())
                        );
                      break;
                    case 3:
                      (a.ranking && a.ranking.length) || (a.ranking = []),
                        a.ranking.push(g.Proto.Title.decode(e, e.uint32()));
                      break;
                    case 4:
                      a.popup = g.Proto.Popup.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return a;
              }),
              e
            );
          })()),
          e
        );
      })()),
      b = (n("a630"), n("3ca3"), n("ddb0"), n("94db")),
      y = n.n(b);
    (function (e) {
      (e[(e["banner"] = 0)] = "banner"),
        (e[(e["image"] = 1)] = "image"),
        (e[(e["webview"] = 2)] = "webview"),
        (e[(e["last"] = 3)] = "last"),
        (e[(e["ad"] = 4)] = "ad");
    })(a || (a = {}));
    var w = (function () {
        function e() {}
        return (
          (e.setStub = function (t) {
            var n = new y.a(t, { delayResponse: 500 });
            n
              .onGet("/title_list/bookmark")
              .reply(200, f.Response.encode(e.getSubscribeListStub()).finish()),
              n
                .onDelete("/title_list/bookmark")
                .reply(200, f.Response.encode(e.unSubscribeStub()).finish()),
              n
                .onPut("/title_list/bookmark")
                .reply(200, f.Response.encode(e.subscribeTitleStub()).finish()),
              n
                .onGet("/title_list/all")
                .reply(200, f.Response.encode(e.getAllTitlesStub()).finish()),
              n
                .onGet("/featured")
                .reply(
                  200,
                  f.Response.encode(e.fetchFeaturedListStub()).finish()
                ),
              n
                .onGet("/title_detail")
                .reply(200, f.Response.encode(e.titleDetail()).finish()),
              n
                .onGet("/web/web_home")
                .reply(200, f.Response.encode(e.fetchTopData()).finish()),
              n
                .onGet("/manga_viewer")
                .reply(200, f.Response.encode(e.fetchViewerData()).finish()),
              n
                .onGet("/questionnaire")
                .reply(
                  200,
                  f.Response.encode({
                    success: { questionnaireView: { isAnswered: !1 } },
                  }).finish()
                ),
              n
                .onPut("/questionnaire")
                .reply(200, f.Response.encode({ success: {} }).finish()),
              n
                .onGet("/comment")
                .reply(200, f.Response.encode(e.fetchCommentData()).finish()),
              n
                .onGet("/web/announcement")
                .reply(
                  200,
                  f.Response.encode(e.fetchServiceAnnouncementData()).finish()
                ),
              n
                .onGet("/title_list/ranking")
                .reply(200, f.Response.encode(e.fetchRanking()).finish()),
              n
                .onPost("/feedback")
                .reply(200, f.Response.encode(e.feedback()).finish()),
              n
                .onPut("/comment_like")
                .reply(200, f.Response.encode({}).finish()),
              n
                .onDelete("/comment_like")
                .reply(200, f.Response.encode({}).finish()),
              n
                .onGet("/publisher_news_list")
                .reply(
                  200,
                  f.Response.encode(e.fetchPublisherNewsList()).finish()
                );
          }),
          (e.fetchPublisherNewsList = function () {
            var t = this;
            return this.successResult(function (n) {
              var a = new f.PublisherNewsListView();
              (a.banner = e.createBanner(160, 50)),
                (a.newsList = [0, 1, 2, 3, 4, 5].map(function (e) {
                  return t.createPublisherNews(0, e);
                })),
                (a.publisherId = 0),
                (a.publisherName = "publisher_name"),
                (n.publisherNewsListView = a);
            });
          }),
          (e.errorResponse = function () {
            var t = new f.Response();
            return (
              (t.error = e.createErrorResponse()),
              (t.error.action = f.ErrorResult.Action.GEOIP_BLOCKING),
              t
            );
          }),
          (e.createErrorResponse = function () {
            var e = new f.ErrorResult();
            return (e.action = f.ErrorResult.Action.MAINTENANCE), e;
          }),
          (e.feedback = function () {
            return this.successResult(function (e) {});
          }),
          (e.fetchRanking = function () {
            return this.successResult(function (t) {
              var n = new f.TitleRankingView();
              (n.titles = Array.from(Array(100).keys()).map(function (t) {
                return e.createTitle(t);
              })),
                (t.titleRankingView = n);
            });
          }),
          (e.fetchServiceAnnouncementData = function () {
            return this.successResult(function (t) {
              var n = new f.ServiceAnnouncementsView();
              (n.serviceAnnouncements = Array.from(Array(10).keys()).map(
                function (t) {
                  return e.createServiceAnnouncement(t);
                }
              )),
                (t.serviceAnnouncementsView = n);
            });
          }),
          (e.createServiceAnnouncement = function (e) {
            var t = new f.ServiceAnnouncement();
            return (
              (t.body =
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dignissimos ducimus ea earum enim, exercitationem fugiat id ipsum iure, minus odit optio quibusdam quo, recusandae sed tempora tenetur voluptatem voluptates?"),
              (t.date = 1539917362),
              (t.title = "AnnouncementTitle"),
              t
            );
          }),
          (e.fetchCommentData = function () {
            return this.successResult(function (t) {
              var n = new f.CommentListView();
              (n.comments = Array.from(Array(10).keys()).map(function (t) {
                return e.createComment(t);
              })),
                (t.commentListView = n);
            });
          }),
          (e.createComment = function (e) {
            var t = new f.Comment();
            return (
              (t.id = e),
              (t.index = e),
              (t.userName = "text" + e),
              (t.iconUrl = "http://via.placeholder.com/20x20"),
              (t.isMyComment = !1),
              (t.alreadyLiked = e % 2 === 0),
              (t.numberOfLikes = 1e3 * Math.random()),
              (t.body =
                e % 2 === 0
                  ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque enim maiores molestiae nemo optio qui quibusdam quo recusandae vero. Beatae consequatur deleniti dicta maiores mollitia neque quaerat quo quos."
                  : "test"),
              (t.created = 1539917362),
              t
            );
          }),
          (e.fetchViewerData = function () {
            return this.successResult(function (t) {
              var n = new f.MangaViewer();
              (n.titleId = 1),
                (n.sns = e.createSns()),
                (n.chapterId = 0),
                (n.chapters = Array.from(Array(3).keys()).map(function (t) {
                  return e.createChapter(t);
                })),
                (n.pages = Array.from(Array(30).keys()).map(function (t) {
                  return e.createPage(t, a.image);
                })),
                n.pages.push(e.createPage(0, a.banner)),
                n.pages.push(e.createPage(0, a.ad)),
                n.pages.push(e.createPage(0, a.ad)),
                n.pages.push(e.createPage(0, a.last)),
                (n.titleName =
                  "MUHYO & ROJI'S BUREAU OF SUPERNATURAL INVESTIGATION"),
                (n.chapterName = "#000"),
                (n.isVerticalOnly = !1),
                (n.startFromRight = !1),
                (t.mangaViewer = n);
            });
          }),
          (e.createPage = function (t, n) {
            var i = new f.Page();
            switch (n) {
              case a.image:
                var r = new f.Page.MangaPage();
                (r.type =
                  5 === t
                    ? f.Page.PageType.RIGHT
                    : 6 === t
                    ? f.Page.PageType.LEFT
                    : f.Page.PageType.SINGLE),
                  (r.imageUrl = this.imageOf(1440, 2407, t)),
                  (i.mangaPage = r);
                break;
              case a.webview:
                break;
              case a.ad:
                i.advertisement = new f.AdNetworkList({
                  adNetworks: [
                    new f.AdNetwork({
                      adsense: new f.AdNetwork.Adsense({
                        unitID: "6996570260",
                      }),
                    }),
                  ],
                });
                break;
              case a.last:
                i.lastPage = e.createLastPage();
                break;
              case a.banner:
                i.bannerList = e.createBannerList();
                break;
            }
            return i;
          }),
          (e.createLastPage = function () {
            var t = new f.Page.LastPage();
            return (
              (t.chapterType = f.Page.ChapterType.NOSEQUENCE),
              (t.currentChapter = e.createChapter(0)),
              (t.isSubscribed = !0),
              (t.nextChapter = e.createChapter(0)),
              (t.topComments = null),
              (t.nextTimeStamp = 1539917362),
              t
            );
          }),
          (e.createBannerList = function () {
            var t = new f.Page.BannerList();
            return (
              (t.banners = Array.from(Array(3).keys()).map(function (t) {
                switch (t % 4) {
                  case 0:
                    return e.createBanner(320, 100, "viewer");
                  case 1:
                    return e.createBanner(320, 100, "detail");
                  case 2:
                    return e.createBanner(320, 100, "webview");
                  case 3:
                    return e.createBanner(320, 100, "web");
                }
              })),
              t
            );
          }),
          (e.getSubscribeListStub = function () {
            return this.successResult(function (t) {
              var n = new f.SubscribedTitlesView();
              (n.titles = Array.from(Array(27).keys()).map(function (t) {
                return e.createTitle(t);
              })),
                (t.subscribedTitlesView = n);
            });
          }),
          (e.createPublisherNews = function (e, t) {
            return new f.PublisherNews({
              id: e,
              body:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque enim maiores molestiae nemo optio qui quibusdam quo recusandae vero. Beatae consequatur deleniti dicta maiores mollitia neque quaerat quo quos.",
              publishedTimeStamp: 1539917362,
              publisherId: t,
              subject: "publisher_news",
              publisherName: "publisher_name",
              action: this.createTransitionAction("web"),
            });
          }),
          (e.titleDetail = function () {
            var e = this;
            return this.successResult(function (t) {
              var n = new f.TitleDetailView();
              (n.title = e.createTitle(1)),
                (n.title.portraitImageUrl = e.imageOf(165, 250)),
                (n.title.landscapeImageUrl = e.imageOf(520, 390)),
                (n.titleImageUrl = e.imageOf(520, 390)),
                (n.sns = e.createSns()),
                (n.nonAppearanceInfo = "non appearance info"),
                (n.numberOfViews = 1e5),
                (n.isSubscribed = !0),
                (n.banners = []),
                (n.titleBanners = [0, 1, 2].map(function (t) {
                  return e.createBanner();
                })),
                (n.updateTiming = f.TitleDetailView.UpdateTiming.NOT_REGULARLY);
              for (var a = 0; a < 5; a++)
                n.banners.push(e.createBanner(160, 50));
              n.publisherItems = [0, 1, 2, 3, 4].map(function (t) {
                return {
                  banner: e.createBanner(160, 50),
                  publisherNews: e.createPublisherNews(0, t),
                };
              });
              for (a = 10; a >= 0; a--)
                n.firstChapterList.push(e.createChapter(a + 10));
              for (a = 10; a >= 0; a--)
                n.lastChapterList.push(e.createChapter(a));
              (n.recommendedTitleList = Array.from(Array(3).keys()).map(
                function (t) {
                  return e.createTitle(t);
                }
              )),
                (n.nextTimeStamp = 1539917362),
                (n.viewingPeriodDescription =
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi blanditiis dignissimos dolorem ea eaque error eum facilis fugit id ipsum itaque nobis praesentium rerum soluta, ullam velit voluptate. Ut?"),
                (n.overview =
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi blanditiis dignissimos dolorem ea eaque error eum facilis fugit id ipsum itaque nobis praesentium rerum soluta, ullam velit voluptate. Ut?"),
                (n.isSimulReleased = !0),
                (n.isSubscribed = !0),
                (n.rating = f.TitleDetailView.Rating.ALLAGE),
                (t.titleDetailView = n);
            });
          }),
          (e.unSubscribeStub = function () {
            return this.successResult(function (e) {});
          }),
          (e.subscribeTitleStub = function () {
            return this.successResult(function (e) {});
          }),
          (e.getAllTitlesStub = function () {
            return this.successResult(function (t) {
              var n = new f.AllTitlesView();
              (n.titles = Array.from(Array(80).keys()).map(function (t) {
                return e.createTitle(t);
              })),
                (t.allTitlesView = n);
            });
          }),
          (e.createTitleList = function () {
            var t = new f.TitleList();
            return (
              (t.listName = "Featured This Week | SAMPLE"),
              (t.featuredTitles = Array.from(Array(27).keys()).map(function (
                t
              ) {
                return e.createTitle(t);
              })),
              t
            );
          }),
          (e.createTitle = function (e) {
            var t = new f.Title();
            return (
              (t.author = "Eiichiro Oda"),
              (t.portraitImageUrl = this.imageOf(165, 250, e)),
              (t.landscapeImageUrl = this.imageOf(520, 390, e)),
              (t.language =
                e % 2 ? f.Title.Language.ENGLISH : f.Title.Language.SPANISH),
              (t.name =
                "MUHYO & ROJI'S BUREAU OF SUPERNATURAL INVESTIGATION " + e),
              (t.titleId = e),
              (t.viewCount = 1e4 * e * Math.random()),
              t
            );
          }),
          (e.fetchFeaturedListStub = function () {
            return this.successResult(function (t) {
              var n = new f.FeaturedTitlesView();
              (n.mainBanner = e.createBanner(200, 100, "viewer")),
                (n.subBanner_1 = e.createBanner()),
                (n.subBanner_2 = e.createBanner());
              var a = new f.FeaturedTitlesView.Contents();
              a.banner = e.createContentsBanner();
              var i = new f.FeaturedTitlesView.Contents();
              (i.titleList = e.createTitleList()),
                (n.contents = [i, a, i, i, a]),
                (t.featuredTitlesView = n);
            });
          }),
          (e.createBanner = function (t, n, a) {
            void 0 === t && (t = 200),
              void 0 === n && (n = 100),
              void 0 === a && (a = "web");
            var i = new f.Banner();
            return (
              (i.imageUrl = this.imageOf(t, n)),
              (i.action = e.createTransitionAction(a)),
              i
            );
          }),
          (e.createContentsBanner = function () {
            var t = new f.Banner();
            return (
              (t.imageUrl = this.imageOf(896, 280)),
              (t.action = e.createTransitionAction("web")),
              t
            );
          }),
          (e.createTransitionAction = function (e) {
            var t = new f.TransitionAction();
            switch (
              ((t.method = f.TransitionAction.PresentationMethod.PUSH), e)
            ) {
              case "viewer":
                t.url = "mangaplus://open/viewer?id=1";
                break;
              case "detail":
                t.url = "mangaplus://open/detail?id=1";
                break;
              case "webview":
                t.url = "mangaplus://open/webview?url=http://www.google.com";
                break;
              case "web":
                t.url = "http://www.google.com";
            }
            return t;
          }),
          (e.createChapter = function (e) {
            var t = new f.Chapter();
            return (
              (t.alreadyViewed = Math.random() > 0.5),
              (t.chapterId = e),
              (t.name = "#00" + e),
              (t.subTitle =
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda beatae cumque, doloremque eligendi error eveniet facilis magni maiores minus molestiae nesciunt optio porro rerum sint temporibus ullam voluptate! Reprehenderit."),
              (t.startTimeStamp = 1539917362),
              (t.thumbnailUrl = this.imageOf(160, 100)),
              (t.endTimeStamp = 1548860400),
              t
            );
          }),
          (e.createSns = function () {
            var e = new f.Sns();
            return (
              (e.body = "シェア文章"), (e.url = "https://www.google.com/"), e
            );
          }),
          (e.imageOf = function (e, t, n) {
            return (
              void 0 === n && (n = 0),
              "http://via.placeholder.com/" + e + "x" + t + "?text=" + n
            );
          }),
          (e.successResult = function (e) {
            var t = new f.Response(),
              n = new f.SuccessResult();
            return e(n), (t.success = n), t;
          }),
          (e.fetchTopData = function () {
            var t = this;
            return this.successResult(function (n) {
              var a = new f.WebHomeView();
              (a.topBanners = Array.from(Array(5).keys()).map(function (t) {
                switch (t % 4) {
                  case 0:
                    return e.createBanner(320, 120, "viewer");
                  case 1:
                    return e.createBanner(320, 120, "detail");
                  case 2:
                    return e.createBanner(320, 120, "webview");
                  case 3:
                    return e.createBanner(320, 120, "web");
                }
              })),
                (a.ranking = Array.from(Array(10).keys()).map(function (t) {
                  return e.createTitle(t);
                })),
                (a.groups = Array.from(Array(5).keys()).map(function (t) {
                  return e.createUpdatedTitleGroup();
                })),
                (a.popup = {
                  popupId: 3,
                  oneImage: {
                    imageUrl: t.imageOf(500, 500),
                    action: t.createTransitionAction("web"),
                  },
                }),
                (n.webHomeView = a);
            });
          }),
          (e.createUpdatedTitleGroup = function () {
            var t = new f.UpdatedTitleGroup();
            return (
              (t.groupName = "UPDATED PAST 2 DAYS"),
              (t.titles = Array.from(Array(7).keys()).map(function (t) {
                return e.createUpdatedTitle(t);
              })),
              t
            );
          }),
          (e.createUpdatedTitle = function (t) {
            var n = new f.UpdatedTitle();
            return (
              (n.title = e.createTitle(t)),
              (n.chapterId = 0),
              (n.chapterName = "#000"),
              (n.chapterSubTitle =
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dignissimos ducimus ea earum enim, exercitationem fugiat id ipsum iure, minus odit optio quibusdam quo, recusandae sed tempora tenetur voluptatem voluptates?"),
              (n.isLatest = t % 3 === 0),
              n
            );
          }),
          e
        );
      })(),
      v = w,
      A = n("9490"),
      k = n("24f8"),
      _ = n("c437"),
      O = "SESSION_ID_KEY",
      S = (function () {
        function e() {
          (this.axios = u.a.create({
            transformResponse: [
              function (e) {
                return f.Response.decode(new Uint8Array(e));
              },
            ],
            timeout: 1e4,
            responseType: "arraybuffer",
            withCredentials: !0,
            httpAgent: new A["Agent"]({ keepAlive: !0 }),
            httpsAgent: new k["Agent"]({ keepAlive: !0 }),
            headers: { "SESSION-TOKEN": e.getSessionId() },
          })),
            this.axios.interceptors.response.use(function (e) {
              return e.data.error ? Promise.reject(e.data) : e;
            }),
            "stg" ===
            Object({ NODE_ENV: "production", BASE_URL: "/" })
              .VUE_APP_ENVIRONMENT
              ? (this.axios.defaults.baseURL =
                  "https://jumpg-webapi-dev.tokyo-cdn.com/api")
              : "pre" ===
                Object({ NODE_ENV: "production", BASE_URL: "/" })
                  .VUE_APP_ENVIRONMENT
              ? (this.axios.defaults.baseURL =
                  "https://jumpg-webapi-pre.tokyo-cdn.com/api")
              : "stub" ===
                Object({ NODE_ENV: "production", BASE_URL: "/" })
                  .VUE_APP_ENVIRONMENT
              ? ((this.axios.defaults.baseURL = "http://localhost:3000"),
                v.setStub(this.axios))
              : (this.axios.defaults.baseURL =
                  "https://jumpg-webapi.tokyo-cdn.com/api");
        }
        return (
          (e.instance = function () {
            return this._instance || (this._instance = new e()), this._instance;
          }),
          (e.getSessionId = function () {
            if (localStorage.getItem(O)) return localStorage.getItem(O);
            var e = _();
            return localStorage.setItem(O, e), e;
          }),
          (e.prototype.fetchCommentList = function (e) {
            return this.get("/comment", { chapter_id: e });
          }),
          (e.prototype.fetchSubscribeList = function () {
            return this.get("/title_list/bookmark");
          }),
          (e.prototype.unSubscribeTitle = function (e) {
            return this.delete("/title_list/bookmark", { title_id: e });
          }),
          (e.prototype.subscribeTitle = function (e) {
            return this.put("/title_list/bookmark", { title_id: e });
          }),
          (e.prototype.fetchAllTitles = function () {
            return this.get("/title_list/all");
          }),
          (e.prototype.fetchTitleDetail = function (e) {
            return this.get("/title_detail", { title_id: e });
          }),
          (e.prototype.fetchTopData = function (e) {
            return this.get("/web/web_home", { lang: e });
          }),
          (e.prototype.fetchViewerData = function (e, t) {
            return this.get("/manga_viewer", {
              chapter_id: e,
              split: "yes",
              img_quality: t || "high",
            });
          }),
          (e.prototype.fetchServiceAnnouncementsData = function (e) {
            return this.get("/web/announcement", { lang: e });
          }),
          (e.prototype.fetchRanking = function () {
            return this.get("/title_list/ranking");
          }),
          (e.prototype.feedback = function (e, t) {
            return this.post("/web/contact", { subject: e, body: t });
          }),
          (e.prototype.likeComments = function (e) {
            return this.put("/comment_like", { comment_id: e });
          }),
          (e.prototype.unlikeComments = function (e) {
            return this.delete("/comment_like", { comment_id: e });
          }),
          (e.prototype.publisherNewsList = function (e, t) {
            return this.get("/publisher_news_list", {
              publisher_id: e,
              lang: t,
            });
          }),
          (e.prototype.checkQuestionnaireStatus = function (e, t) {
            var n = (function () {
              return "stg" ===
                Object({ NODE_ENV: "production", BASE_URL: "/" })
                  .VUE_APP_ENVIRONMENT
                ? "https://jumpg-api-dev.tokyo-cdn.com/api"
                : "pre" ===
                  Object({ NODE_ENV: "production", BASE_URL: "/" })
                    .VUE_APP_ENVIRONMENT
                ? "https://jumpg-api-pre.tokyo-cdn.com/api"
                : "https://jumpg-api.tokyo-cdn.com/api";
            })();
            return this.get(
              "/questionnaire",
              Object(i["a"])({ questionnaire_key: e }, t),
              n
            );
          }),
          (e.prototype.putQuestionnaire = function (e, t, n, a) {
            var r = (function () {
              return "stg" ===
                Object({ NODE_ENV: "production", BASE_URL: "/" })
                  .VUE_APP_ENVIRONMENT
                ? "https://jumpg-api-dev.tokyo-cdn.com/api"
                : "pre" ===
                  Object({ NODE_ENV: "production", BASE_URL: "/" })
                    .VUE_APP_ENVIRONMENT
                ? "https://jumpg-api-pre.tokyo-cdn.com/api"
                : "https://jumpg-api.tokyo-cdn.com/api";
            })();
            return this.put(
              "/questionnaire",
              Object(i["a"])({ questionnaire_key: e, lang: t }, a),
              n,
              r
            );
          }),
          (e.prototype.post = function (e, t) {
            return (
              void 0 === t && (t = {}), this.axios.post(e, {}, { params: t })
            );
          }),
          (e.prototype.get = function (e, t, n) {
            return (
              void 0 === t && (t = {}),
              this.axios.get(e, { baseURL: n, params: t })
            );
          }),
          (e.prototype.delete = function (e, t) {
            return (
              void 0 === t && (t = {}), this.axios.delete(e, { params: t })
            );
          }),
          (e.prototype.put = function (e, t, n, a) {
            return (
              void 0 === t && (t = {}),
              void 0 === n && (n = {}),
              this.axios.put(e, n, { baseURL: a, params: t })
            );
          }),
          (e.prototype.fetchFeaturedList = function (e) {
            return this.get("/featured", { lang: e });
          }),
          e
        );
      })(),
      T = {
        answers: [
          {
            description:
              "Have you ever purchased a physical (paper) volume of manga? (Choose one)",
            selection: [
              "Yes, 5 or more books in total",
              "Yes, 1-4 books",
              "No, have never purchased",
            ],
            numberOfChoices: 1,
            hideFreeform: !0,
          },
          {
            description:
              "Have you ever paid for a digital edition of a manga? (Choose one)",
            selection: ["YES", "NO"],
            hideFreeform: !0,
            numberOfChoices: 1,
          },
          {
            description:
              "Have you ever read pirated manga? If so, how often? (Choose one)",
            hideFreeform: !0,
            selection: [
              "Yes, often",
              "Yes, occasionally",
              "Largely haven't",
              "Never have",
            ],
            numberOfChoices: 1,
          },
          {
            description:
              'For those who chose "Yes, often" or "Yes, occasionally" in the question above, could you please share with us your reason(s) for doing so? (Multiple choice, skip if not applicable)',
            canSkip: !0,
            selection: [
              "Pirated manga sites update more quickly",
              "Some manga are only available on pirate sites",
              "Pirated manga sites have more language options",
              "Pirated manga sites have more features",
              "I am used to pirated manga sites",
            ],
            numberOfChoices: 6,
          },
          {
            description:
              "What are the good things about Manga Plus? (3 maximum)",
            selection: [
              "Updates happen concurrently with releases in Japan.",
              "There is a large selection of titles.",
              "The website is updated in English, Spanish, and Thai.",
              "Being able to read and write reviews in the comment section.",
              "It is a legitimate way to support manga artists.",
              "The website loads quickly and has a good user interface.",
            ],
            numberOfChoices: 3,
          },
          {
            description:
              "What are areas you think Manga Plus should improve in? (3 maximum)",
            selection: [
              "Updates are slower than pirated manga sites.",
              "There is a limited selection of titles.",
              "There are not enough language options.",
              "The comment section isn't active enough and it's boring.",
              "You need to pay to read chapters between the initial and latest chapters.",
              "The website loads slowly and has a bad user interface.",
            ],
            numberOfChoices: 3,
          },
          {
            description:
              "In the future, which titles should we include or add to on Manga Plus? (3 maximum)",
            numberOfChoices: 3,
            hideFreeform: !0,
            selection: [
              "Haikyu!!",
              "We Never Learn",
              "Mitama Security: Spirit Busters",
              "Chainsaw Man",
              "Yuuna and the Haunted Hot Springs",
              "Blue Exorcist",
              "Seraph of the End",
              "Twin Star Exorcists",
              "Kono Oto Tomare! Sounds of Life",
              "Demon Incidents - Kemono Jihen",
              "Rurouni Kenshin: The Hokkaido Arc",
              "The Prince of Tennis",
              "My Hero Academia: Vigilantes",
              "Aharen Is Indecipherable - Aharen-san wa Hakarenai",
              "Ultramarine Siren - Gunjou ni Siren",
              "Dosanko Gyaru Is Mega Cute - Dosanko Gyaru ha Namaramenkoi",
              "Blacked-out Battery - Boukyaku Battery",
              "2.5D Seduction - 2.5 Jigen no Ririsa",
              "Slave of the Hell Soldiers - Mato Seihei no Slave",
            ],
          },
          {
            description:
              "Other than manga, what content would you most like to see on Manga Plus? (Choose one)",
            numberOfChoices: 1,
            selection: [
              "Interviews with artists",
              "Interviews with editors",
              "Videos of artists drawing illustrations.",
              "Articles reporting on manga events held in Japan",
              "A display of fanart submissions",
              "Articles on Japanese culture",
              "Color illustration giveaways",
              "I don't want anything but manga",
            ],
          },
          {
            description:
              "If Manga Plus introduced a subscription service that allowed you to read every chapter, not just the oldest and latest ones, how much would you be willing to pay to subscribe? (Choose one) *There are no plans for subscriptions to Manga Plus at present.",
            numberOfChoices: 1,
            hideFreeform: !0,
            selection: [
              "20 USD/month",
              "10 USD/month",
              "5 USD/month",
              "2 USD/month",
              "Would not subscribe",
            ],
          },
          {
            description:
              "If Manga Plus allowed you to directly purchase chapters, how much would you be willing to pay per-chapter? (Choose one) *There are no plans for such a feature on Manga Plus at present.",
            numberOfChoices: 1,
            hideFreeform: !0,
            selection: [
              "1 USD",
              "50 cents",
              "30 cents",
              "10 cents",
              "Would not purchase",
            ],
          },
          {
            description:
              "If Manga Plus allowed you to directly purchase whole, digital volumes of manga, how much would you be willing to pay per-volume? (Choose one) *There are no plans for such a feature on Manga Plus at present.",
            numberOfChoices: 1,
            hideFreeform: !0,
            selection: [
              "10 USD",
              "5 USD",
              "3 USD",
              "1 USD",
              "Would not purchase",
            ],
          },
          {
            description:
              "Have you ever bought a manga (digital or print) because you first read it on Manga Plus? (Choose one)",
            numberOfChoices: 1,
            selection: ["Yes", "No"],
            hideFreeform: !0,
          },
          {
            description:
              "Where do you get your information about manga from? (3 maximum)",
            numberOfChoices: 3,
            selection: [
              "Facebook",
              "Reddit",
              "Twitter",
              "AnimeNewsNetwork",
              "MyAnimeList",
              "Manga conventions and events",
            ],
          },
          {
            description: "Please select your gender. (Choose one)",
            hideFreeform: !0,
            numberOfChoices: 1,
            selection: ["Male", "Female", "Other"],
          },
          {
            description: "How old are you? (Choose one)",
            numberOfChoices: 1,
            selection: ["10-19", "20-29", "30-39", "40-49", "50-59", "Other"],
            hideFreeform: !0,
          },
          {
            description:
              "Please select your country/region of residence. (Choose one)",
            numberOfChoices: 1,
            selection: [
              "USA",
              "Thailand",
              "Mexico",
              "Indonesia",
              "Brazil",
              "Spain",
              "Philippines",
              "Italy",
              "Peru",
              "Malaysia",
              "Germany",
              "Chile",
              "Argentina",
              "Colombia",
              "France",
              "Canada",
              "Vietnam",
              "England",
              "India",
              "Australia",
              "My country isn't listed",
            ],
            hideFreeform: !0,
          },
          {
            description:
              "Please select the language you use most for Manga Plus. (Choose one)",
            numberOfChoices: 1,
            hideFreeform: !0,
            selection: ["English", "Spanish", "Thai"],
          },
        ],
      },
      P = {
        answers: [
          {
            description:
              "¿Ha comprado volúmenes compilatorios de manga alguna vez? (elija una respuesta)",
            numberOfChoices: 1,
            hideFreeform: !0,
            selection: [
              "Sí, más de 5 volúmenes.",
              "Sí, de 1 a 4 volúmenes.",
              "No, nunca.",
            ],
          },
          {
            description:
              "¿Alguna vez ha comprado manga digital? (elija una respuesta)",
            numberOfChoices: 1,
            selection: ["Sí.", "No."],
            hideFreeform: !0,
          },
          {
            description:
              "¿Ha leído manga en sitios de ediciones piratas alguna vez? (elija una respuesta)",
            numberOfChoices: 1,
            hideFreeform: !0,
            selection: [
              "Sí, con frecuencia.",
              "Sí, a veces.",
              "Casi nunca.",
              "Nunca.",
            ],
          },
          {
            description:
              "Si en la anterior pregunta ha elegido “Con frecuencia” o “A veces”, seleccione el motivo (múltiple elección)",
            numberOfChoices: 6,
            canSkip: !0,
            selection: [
              "Las webs piratas actualizan más rápido.",
              "Hay mangas que quiero leer que solo están en webs piratas.",
              "Hay más variedad de idiomas en webs piratas.",
              "Las webs piratas funcionan mejor.",
              "Estoy acostumbrado a ese tipo de webs.",
            ],
          },
          {
            description:
              "Por favor, díganos los puntos positivos de MANGA Plus. (elija hasta tres respuestas) ",
            numberOfChoices: 3,
            selection: [
              "Actualización rápida en simultáneo con Japón.",
              "Hay una gran selección de títulos.",
              "Actualización en inglés, español y tailandés.",
              "Se puede leer y escribir comentarios en el tablón de comentarios.",
              "Al ser una página oficial, se respetan los derechos de autor.",
              "El sitio tiene buena velocidad e interfaz.",
            ],
          },
          {
            description:
              "Elija qué desea que se mejore en MANGA Plus (elija hasta tres respuestas)",
            numberOfChoices: 3,
            selection: [
              "La actualización de manga es más lenta que en los sitios piratas.",
              "El número de obras disponibles es escaso.",
              "El número de idiomas disponibles es escaso.",
              "El tablón de comentarios es aburrido.",
              "El número de capítulos entre los primeros y los últimos son de pago y no los puedo leer.",
              "La velocidad y/o el interfaz de la web son malos.",
            ],
          },
          {
            description:
              "¿Qué otros títulos le gustaría que se agreguen a MANGA Plus en el futuro? (elija hasta tres respuestas)",
            numberOfChoices: 3,
            hideFreeform: !0,
            selection: [
              "Haikyu!!",
              "We Never Learn",
              "Mitama Security: Spirit Busters",
              "Hombre Motosierra",
              "Yūna de la Pensión Yuragi",
              "Blue Exorcist",
              "Seraph of the End - El Reino de los Vampiros",
              "Twin Star Exorcists",
              "Kono Oto Tomare! Sounds of Life",
              "Incidentes de Monstruos - Kemono Jihen",
              "Rurouni Kenshin: Arco de Hokkaido",
              "El Príncipe de Tenis",
              "My Hero Academia: Vigilante Illegals",
              "Aharen Is Indecipherable - Aharen-san wa Hakarenai",
              "Ultramarine Siren - Gunjou ni Siren",
              "Dosanko Gyaru Is Mega Cute - Dosanko Gyaru ha Namaramenkoi",
              "Blacked-out Battery - Boukyaku Battery",
              "2.5D Seduction - 2.5 Jigen no Ririsa",
              "Slave of the Hell Soldiers - Mato Seihei no Slave",
            ],
          },
          {
            description:
              "¿Qué otro contenido le gustaría que se agregase a MANGA Plus? (elija una respuesta)",
            numberOfChoices: 1,
            selection: [
              "Entrevistas a los autores.",
              "Entrevistas a los editores.",
              "Vídeos del autor dibujando ilustraciones.",
              "Artículos informativos sobre eventos de manga realizados en Japón.",
              "Espacio para publicación de fanarts.",
              "Artículos sobre cultura japonesa.",
              "Proyecto de regalo de ilustraciones originales.",
              "Sólo quiero que se publique manga.",
            ],
          },
          {
            description:
              "Si hubiera una opción de leer todo un manga completo desde el comienzo hasta el fin, ¿qué tarifa estaría dispuesto a pagar? (elija una respuesta) * Actualmente, no hay ningún plan para implementar la función de cargo en MANGA Plus.",
            numberOfChoices: 1,
            hideFreeform: !0,
            selection: [
              "20 USD / por mes.",
              "10 USD / por mes.",
              "5 USD / por mes.",
              "2 USD / por mes.",
              "Sin cargo.",
            ],
          },
          {
            description:
              "Si en MANGA Plus cada capítulo fuera de pago, ¿por qué precio estaría dispuesto a comprarlo? (elija una respuesta) (Actualmente no está previsto el impuesto de pago en los capítulos)",
            numberOfChoices: 1,
            hideFreeform: !0,
            selection: [
              "1 USD.",
              "0.5 USD.",
              "0.3 USD.",
              "0.1 USD.",
              "No lo compraría.",
            ],
          },
          {
            description:
              "Si pudiera comprar cada volumen de e-books por MANGA Plus, ¿por qué precio estaría dispuesto a comprarlo? (elija una respuesta) * Actualmente, no hay ningún plan para implementar la función de cargo en Manga Plus.",
            numberOfChoices: 1,
            selection: [
              "10 USD.",
              "5 USD.",
              "3 USD.",
              "1 USD.",
              "No lo compraría.",
            ],
            hideFreeform: !0,
          },
          {
            description:
              "¿Ha comprado algún manga  (físico o digital), de una serie que haya conocido gracias MANGA Plus?",
            numberOfChoices: 1,
            selection: ["Sí.", "No."],
            hideFreeform: !0,
          },
          {
            description:
              "Por favor, díganos dónde obtiene información sobre manga (elija hasta tres respuestas)",
            numberOfChoices: 1,
            selection: [
              "facebook.",
              "reddit.",
              "twitter.",
              "AnimeNewsNetrork.",
              "MyAnimeList.",
              "Convenciones y eventos de manga.",
            ],
          },
          {
            description: "Por favor, díganos su sexo (elija una respuesta)",
            numberOfChoices: 1,
            selection: ["Hombre.", "Mujer.", "Otro."],
            hideFreeform: !0,
          },
          {
            description: "Por favor, díganos su edad (elija una respuesta)",
            numberOfChoices: 1,
            selection: ["10s.", "20s.", "30s.", "40s.", "50s.", "Otros."],
            hideFreeform: !0,
          },
          {
            description:
              "Por favor, díganos en qué país vive actualmente (elija una respuesta)",
            numberOfChoices: 1,
            selection: [
              "Estados Unidos",
              "Tailandia",
              "México",
              "Indonesia",
              "Brasil",
              "España",
              "Filipinas",
              "Italia",
              "Perú",
              "Malasia",
              "Alemania",
              "Chile",
              "Argentina",
              "Colombia",
              "Francia",
              "Canadá",
              "Vietnam",
              "Inglaterra",
              "India",
              "Australia",
              "Mi país no se encuentra en la lista (Otro)",
            ],
            hideFreeform: !0,
          },
          {
            description:
              "or favor, díganos el idioma que elige para leer en MANGA Plus. (elija una respuesta)",
            numberOfChoices: 1,
            hideFreeform: !0,
            selection: ["Inglés.", "Español.", "Tailandés."],
          },
        ],
      },
      C = {
        eng: {
          description: [
            "Thank you for your loyal readership.",
            "We appreciate your participation in this survey.",
            "Your survey responses will just be used to help us make future decisions regarding Manga Plus, so please feel free to answer honestly.",
            " (Please only fill out the survey once per person)",
          ],
          nothingErrorMessage: "Please choose the answer.",
          overErrorMessage: "please answer up to three answers.",
          finishMessage: {
            title: "Survey completed!",
            body: [
              "Thanks for completing our survey. Your feedback will be reviewed by MANGA Plus team and will be made use for future performances.",
            ],
          },
          alreadyMessage: {
            title: "Survey already taken",
            body: [
              "Thanks for your time. Your feedback has been already received and will be reviewed by MANGA Plus team.",
            ],
          },
          otherMessage: "Other",
        },
        esp: {
          description: [
            "Gracias por su constante apoyo como lector.",
            "En esta ocasión, queremos pedirle su colaboración con esta encuesta.",
            "La información proporcionada será tomada como referencia para posteriores proyectos y no será utilizada como desventaja para el lector.",
            "(Rogamos que no se haga más de una encuesta por persona)",
          ],
          nothingErrorMessage: "Elija la respuesta.",
          overErrorMessage: "por favor responda hasta tres.",
          finishMessage: {
            title: "Encuesta completada!",
            body: [
              "Muchas gracias por responder nuestra encuesta. Esperamos seguir contando con su apoyo en MANGA Plus.",
            ],
          },
          alreadyMessage: {
            title: "Encuesta ya realizada.",
            body: [
              "Muchas gracias por responder nuestra encuesta. Esperamos seguir contando con su apoyo en MANGA Plus.",
            ],
          },
          otherMessage: "Otros(respuesta libre).",
        },
      },
      I = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.errorMessage = {}),
            (t.freewordEnable = {}),
            (t.freewordText = {}),
            (t.isAnswered = null),
            (t.isSubmitted = !1),
            (t.canPost = !1),
            (t.result = {}),
            (t.model = null),
            (t.message = null),
            t
          );
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.created = function () {
            var e = this,
              t = this.$route.params.questionnaire_key,
              n = this.$route.query,
              a = n.os,
              i = n.app_ver,
              r = n.os_ver,
              o = n.secret;
            T.answers.forEach(function (t, n) {
              (e.freewordText["q" + (n + 1)] = ""),
                (e.freewordEnable["q" + (n + 1)] = !1);
            }),
              "string" === typeof t &&
                S.instance()
                  .checkQuestionnaireStatus(t, {
                    os: a,
                    app_ver: i,
                    os_ver: r,
                    secret: o,
                  })
                  .then(function (t) {
                    var n = e.$route.params.lang;
                    t.data.error
                      ? e.$notify({
                          group: "foo",
                          type: "error",
                          title:
                            "esp" === n
                              ? t.data.error.spanishPopup.subject
                              : t.data.error.englishPopup.subject,
                          text:
                            "esp" === n
                              ? t.data.error.spanishPopup.body
                              : t.data.error.englishPopup.body,
                        })
                      : t.data.success &&
                        ((e.isAnswered =
                          t.data.success.questionnaireView.isAnswered),
                        (e.model = "esp" === n ? P : T),
                        (e.message = C[n]),
                        e.validate());
                  });
          }),
          (t.prototype.onClick = function () {
            var e = this,
              t = JSON.parse(JSON.stringify(this.result));
            Object.keys(this.freewordText).forEach(function (n) {
              e.freewordText[n] &&
                (Array.isArray(t[n])
                  ? t[n].push(e.freewordText[n])
                  : (t[n] = e.freewordText[n]));
            });
            var n = this.$route.params.questionnaire_key,
              a = this.$route.query,
              i = a.os,
              r = a.app_ver,
              o = a.os_ver,
              s = a.secret,
              l = this.$route.params.lang;
            console.log("map", t),
              console.log("freeword", this.freewordText),
              S.instance()
                .putQuestionnaire(n, l, t, {
                  os: i,
                  app_ver: r,
                  os_ver: o,
                  secret: s,
                })
                .then(function (t) {
                  t.data.error
                    ? e.$notify({
                        group: "foo",
                        type: "error",
                        title:
                          "esp" === l
                            ? t.data.error.spanishPopup.subject
                            : t.data.error.englishPopup.subject,
                        text:
                          "esp" === l
                            ? t.data.error.spanishPopup.body
                            : t.data.error.englishPopup.body,
                      })
                    : (e.isSubmitted = !0);
                });
          }),
          (t.prototype.handleChange = function (e) {
            console.log("before", this.result[e.target.name]),
              this.result[e.target.name] || (this.result[e.target.name] = []);
            var t = this.result[e.target.name];
            t.includes(e.target.value)
              ? (this.result[e.target.name] = t.filter(function (t) {
                  return t !== e.target.value;
                }))
              : (t.push(e.target.value), (this.result[e.target.name] = t)),
              console.log("after", this.result[e.target.name]),
              this.validate();
          }),
          (t.prototype.handleRadio = function (e) {
            var t, n;
            console.log("before", this.result[e.target.name]),
              (this.result[e.target.name] = e.target.value),
              (this.freewordEnable = Object(i["a"])(
                Object(i["a"])({}, this.freewordEnable),
                ((t = {}), (t[e.target.name] = !1), t)
              )),
              (this.freewordText = Object(i["a"])(
                Object(i["a"])({}, this.freewordText),
                ((n = {}), (n[e.target.name] = ""), n)
              )),
              console.log("after", this.result[e.target.name]),
              this.validate();
          }),
          (t.prototype.handleFreeWordEnable = function (e) {
            var t, n;
            console.log("before", this.freewordEnable),
              (this.freewordEnable = Object(i["a"])(
                Object(i["a"])({}, this.freewordEnable),
                ((t = {}), (t[e.target.name] = e.target.checked), t)
              )),
              e.target.checked ||
                (this.freewordText = Object(i["a"])(
                  Object(i["a"])({}, this.freewordText),
                  ((n = {}), (n[e.target.name] = ""), n)
                )),
              console.log("after", this.freewordEnable),
              this.validate();
          }),
          (t.prototype.handleFreeword = function (e) {
            console.log("before", this.result[e.target.name]),
              (this.freewordText[e.target.name] = e.target.value),
              (this.result[e.target.name] = e.target.value),
              console.log("after", this.result[e.target.name]),
              this.validate();
          }),
          (t.prototype.handleCheckboxFreeword = function (e) {
            console.log("before", this.result[e.target.name]),
              (this.freewordText[e.target.name] = e.target.value),
              console.log("after", this.result[e.target.name]),
              this.validate();
          }),
          (t.prototype.validate = function () {
            var e = this;
            (this.canPost = !0),
              this.model.answers.forEach(function (t, n) {
                var a,
                  i,
                  r = e.result["q" + (n + 1)];
                if (!t.canSkip) {
                  if (!r) return void (e.canPost = !1);
                  var o = e.freewordEnable["q" + (n + 1)],
                    s = o ? r.length + 1 : r.length;
                  if ("string" === typeof r);
                  else {
                    if (0 === s)
                      return (
                        (e.canPost = !1),
                        void (e.errorMessage["q" + (n + 1)] =
                          null === (a = e.message) || void 0 === a
                            ? void 0
                            : a.nothingErrorMessage)
                      );
                    if (s > t.numberOfChoices)
                      return (
                        (e.canPost = !1),
                        void (e.errorMessage["q" + (n + 1)] =
                          null === (i = e.message) || void 0 === i
                            ? void 0
                            : i.overErrorMessage)
                      );
                  }
                }
                e.errorMessage["q" + (n + 1)] = void 0;
              });
          }),
          (t.prototype.render = function (e) {
            var t,
              n,
              a,
              i,
              r,
              o = this;
            return null === this.model
              ? e("p", ["loading"])
              : !0 === this.isAnswered
              ? e("div", { class: s.a.container }, [
                  e("div", { class: s.a.header }, [
                    e("div", { class: s.a.check_mark }),
                    e("p", { class: s.a.header__text }, [
                      null === (t = this.message) || void 0 === t
                        ? void 0
                        : t.alreadyMessage.title,
                    ]),
                  ]),
                  null === (n = this.message) || void 0 === n
                    ? void 0
                    : n.alreadyMessage.body.map(function (t) {
                        return e("p", { class: s.a.finished__body }, [t]);
                      }),
                ])
              : !0 === this.isSubmitted
              ? e("div", { class: s.a.container }, [
                  e("div", { class: s.a.header }, [
                    e("div", { class: s.a.check_mark }),
                    e("p", { class: s.a.header__text }, [
                      null === (a = this.message) || void 0 === a
                        ? void 0
                        : a.finishMessage.title,
                    ]),
                  ]),
                  null === (i = this.message) || void 0 === i
                    ? void 0
                    : i.finishMessage.body.map(function (t) {
                        return e("p", { class: s.a.finished__body }, [t]);
                      }),
                ])
              : e("div", { class: s.a.container }, [
                  e("p", { class: s.a.description }, [
                    null === (r = this.message) || void 0 === r
                      ? void 0
                      : r.description.map(function (t) {
                          return e("vc-fragment", [t, e("br")]);
                        }),
                  ]),
                  this.model.answers.map(function (t, n) {
                    var a, i;
                    return e("div", { class: s.a.questionnaire }, [
                      e("div", { class: s.a.questionnaire_item }, [
                        e("p", { class: s.a.questionnaire_number }, [
                          n + 1,
                          ".",
                        ]),
                        e("p", { class: s.a.questionnaire_title }, [
                          t.description,
                        ]),
                      ]),
                      o.errorMessage["q" + (n + 1)] &&
                        e("p", { class: s.a.error_message }, [
                          o.errorMessage["q" + (n + 1)],
                        ]),
                      1 === t.numberOfChoices
                        ? e("div", { class: s.a.radios }, [
                            t.selection.map(function (t, a) {
                              return e("vc-fragment", [
                                e("input", {
                                  attrs: {
                                    id: "q" + (n + 1) + "_" + a,
                                    name: "q" + (n + 1),
                                    type: "radio",
                                  },
                                  domProps: { value: t },
                                  class: s.a.radio,
                                  on: { change: o.handleRadio },
                                }),
                                e(
                                  "label",
                                  {
                                    attrs: { for: "q" + (n + 1) + "_" + a },
                                    class: s.a.label,
                                  },
                                  [t]
                                ),
                              ]);
                            }),
                            !t.hideFreeform &&
                              e("vc-fragment", [
                                e("input", {
                                  attrs: {
                                    id: "q" + (n + 1) + "_other",
                                    name: "q" + (n + 1),
                                    type: "radio",
                                  },
                                  class: s.a.radio,
                                  on: { change: o.handleFreeWordEnable },
                                }),
                                e(
                                  "label",
                                  {
                                    attrs: { for: "q" + (n + 1) + "_other" },
                                    class: s.a.label,
                                  },
                                  [
                                    t.customOtherMessage ||
                                      (null === (a = o.message) || void 0 === a
                                        ? void 0
                                        : a.otherMessage),
                                  ]
                                ),
                                e("textarea", {
                                  class: s.a.textarea,
                                  attrs: {
                                    disabled: !o.freewordEnable["q" + (n + 1)],
                                    name: "q" + (n + 1),
                                    maxlength: 100,
                                  },
                                  domProps: {
                                    value: o.freewordText["q" + (n + 1)],
                                  },
                                  on: { change: o.handleFreeword },
                                }),
                              ]),
                          ])
                        : e("div", { class: s.a.choices }, [
                            t.selection.map(function (t, a) {
                              return e("vc-fragment", [
                                e("input", {
                                  attrs: {
                                    id: "q" + (n + 1) + "_" + a,
                                    name: "q" + (n + 1),
                                    type: "checkbox",
                                  },
                                  domProps: { value: t },
                                  class: s.a.checkbox,
                                  on: { change: o.handleChange },
                                }),
                                e(
                                  "label",
                                  {
                                    attrs: { for: "q" + (n + 1) + "_" + a },
                                    class: s.a.label,
                                  },
                                  [t]
                                ),
                              ]);
                            }),
                            !t.hideFreeform &&
                              e("vc-fragment", [
                                e("input", {
                                  attrs: {
                                    id: "q" + (n + 1) + "_other",
                                    name: "q" + (n + 1),
                                    type: "checkbox",
                                  },
                                  class: s.a.checkbox,
                                  on: { change: o.handleFreeWordEnable },
                                }),
                                e(
                                  "label",
                                  {
                                    attrs: { for: "q" + (n + 1) + "_other" },
                                    class: s.a.label,
                                  },
                                  [
                                    null === (i = o.message) || void 0 === i
                                      ? void 0
                                      : i.otherMessage,
                                  ]
                                ),
                                e("textarea", {
                                  class: s.a.textarea,
                                  attrs: {
                                    disabled: !o.freewordEnable["q" + (n + 1)],
                                    name: "q" + (n + 1),
                                    maxlength: 100,
                                  },
                                  domProps: {
                                    value: o.freewordText["q" + (n + 1)],
                                  },
                                  on: { change: o.handleCheckboxFreeword },
                                }),
                              ]),
                          ]),
                    ]);
                  }),
                  e(
                    "button",
                    {
                      class: s.a.button,
                      on: { click: this.onClick },
                      attrs: { disabled: !this.canPost },
                    },
                    ["submit"]
                  ),
                ]);
          }),
          (t = Object(i["c"])(
            [Object(r["a"])({ components: { "vc-fragment": l } })],
            t
          )),
          t
        );
      })(r["c"]),
      E = n("2b0e"),
      L = (n("9f29"), n("2fe1"));
    L["b"].registerHooks([
      "beforeRouteEnter",
      "beforeRouteLeave",
      "beforeRouteUpdate",
    ]);
    var N = n("8c4f5"),
      D = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n("notifications", { attrs: { group: "foo" } }),
            n("router-view", { key: e.$route.fullPath }),
          ],
          1
        );
      },
      j = [],
      V = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return Object(i["d"])(t, e), (t = Object(i["c"])([r["a"]], t)), t;
      })(r["c"]),
      x = V,
      R = x,
      M = (n("034f"), n("2877")),
      U = Object(M["a"])(R, D, j, !1, null, null, null),
      B = U.exports,
      H = n("ec71"),
      F = n.n(H),
      G = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.onClickRemove = function () {
            this.$emit("remove");
          }),
          (t.prototype.onClickUndo = function () {
            this.$emit("undo");
          }),
          (t.prototype.render = function (e) {
            var t = this,
              n = this.title.isRemoved
                ? e(
                    "p",
                    {
                      class: F.a.btn,
                      on: {
                        click: function () {
                          return t.onClickUndo();
                        },
                      },
                    },
                    [this.$t("UNDO")]
                  )
                : e(
                    "p",
                    {
                      class: F.a.btn,
                      on: {
                        click: function () {
                          return t.onClickRemove();
                        },
                      },
                    },
                    [this.$t("REMOVE")]
                  );
            return e("div", { class: F.a.contents }, [
              e("div", { class: F.a.imgWrapper }, [
                e(
                  "p",
                  {
                    directives: [{ name: "show", value: this.title.isRemoved }],
                    class: F.a.removedMessage,
                  },
                  [this.$t("REMOVED")]
                ),
                e(
                  "router-link",
                  {
                    attrs: {
                      to: "/titles/" + this.title.titleId,
                      disabled: this.title.isRemoved,
                    },
                  },
                  [
                    e("img", {
                      directives: [
                        { name: "lazy", value: this.title.portraitImageUrl },
                      ],
                      key: this.title.titleId,
                      class: this.title.isRemoved
                        ? F.a.removed + " " + F.a.image
                        : F.a.image,
                      attrs: { alt: "image" },
                    }),
                  ]
                ),
                n,
              ]),
            ]);
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "title", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      W = G,
      q = n("6c9f"),
      Y = n.n(q),
      Q = n("60fe"),
      z = n.n(Q),
      K = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e("h1", { class: z.a.title + " " + t.data.class }, [
            t.slots().default,
          ]);
        },
      }),
      X =
        (n("5319"),
        function (e, t) {
          switch (t.error.action) {
            case f.ErrorResult.Action.MAINTENANCE:
              e.replace("/maintenance");
              break;
            case f.ErrorResult.Action.GEOIP_BLOCKING:
              e.replace("/blocking");
              break;
            default:
              e.replace("/error");
          }
        }),
      $ = n("3a09"),
      J = n.n($),
      Z = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e("div", { class: J.a.modal }, [
              e("div", { class: J.a.banner }, [
                e(
                  "a",
                  {
                    attrs: {
                      href: (function () {
                        return "iPhone" === navigator.platform ||
                          "iPod" === navigator.platform ||
                          "iPad" === navigator.platform
                          ? "https://itunes.apple.com/app/id1442476536"
                          : "https://play.google.com/store/apps/details?id=jp.co.shueisha.mangaplus";
                      })(),
                    },
                  },
                  [
                    e("img", {
                      attrs: {
                        src: (function () {
                          return "en" === t.$store.state.language.serviceStatus
                            ? n("660a")
                            : n("bb28");
                        })(),
                        alt: "Banner",
                      },
                      class: J.a.bannerImage,
                    }),
                  ]
                ),
                e(
                  "div",
                  {
                    class: J.a.closeButton,
                    on: {
                      click: function () {
                        localStorage.setItem("isBannerShowed", ""),
                          t.$emit("click");
                      },
                    },
                  },
                  [
                    e("img", {
                      attrs: { src: n("0b2a") },
                      class: J.a.closeButtonImage,
                    }),
                  ]
                ),
              ]),
            ]);
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      ee = Z,
      te = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.isBannerShowed = !1), t;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.beforeRouteLeave = function (e, t, n) {
            this.$store.commit("hideSettingModal"), n();
          }),
          (t.prototype.created = function () {
            var e = this;
            this.$store.dispatch("favorited/fetchData").catch(function (t) {
              X(e.$router, t);
            });
          }),
          (t.prototype.callRemoveAPI = function (e) {
            return Object(i["b"])(this, void 0, void 0, function () {
              return Object(i["e"])(this, function (t) {
                return this.$store.dispatch("favorited/unsubscribe", e), [2];
              });
            });
          }),
          (t.prototype.callUndoAPI = function (e) {
            return Object(i["b"])(this, void 0, void 0, function () {
              return Object(i["e"])(this, function (t) {
                return this.$store.dispatch("favorited/subscribe", e), [2];
              });
            });
          }),
          (t.prototype.render = function (e) {
            var t = this,
              a = this.$store.state.favorited.titles.map(function (n, a) {
                return e(W, {
                  attrs: { title: t.$store.state.favorited.titles[a] },
                  on: {
                    remove: function () {
                      t.callRemoveAPI(a);
                    },
                    undo: function () {
                      t.callUndoAPI(a);
                    },
                  },
                });
              });
            return e("div", { class: "container" }, [
              e(K, [this.$t("FAVORITED")]),
              (function () {
                return t.$store.state.favorited.loading
                  ? e("div", ["loading..."])
                  : e("div", [
                      (function () {
                        if (
                          (!localStorage ||
                            null === localStorage.getItem("isBannerShowed")) &&
                          t.$store.state.favorited.titles.length > 0
                        )
                          return e(ee, {
                            style: { display: t.isBannerShowed ? "none" : "" },
                            on: {
                              click: function () {
                                t.isBannerShowed = !0;
                              },
                            },
                            attrs: {
                              serviceLanguage:
                                t.$store.state.language.serviceStatus,
                            },
                          });
                      })(),
                      e(
                        "div",
                        {
                          class: Y.a.gridContainer,
                          directives: [
                            {
                              name: "show",
                              value: t.$store.state.favorited.titles.length > 0,
                            },
                          ],
                        },
                        [a]
                      ),
                      e(
                        "div",
                        {
                          class: Y.a.empty,
                          directives: [
                            {
                              name: "show",
                              value:
                                0 == t.$store.state.favorited.titles.length,
                            },
                          ],
                        },
                        [
                          e("img", {
                            attrs: { src: n("b89d"), alt: "empty" },
                            class: Y.a.emptyImage,
                          }),
                        ]
                      ),
                    ]);
              })(),
            ]);
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      ne = te,
      ae = (n("fb6a"), n("a5b5")),
      ie = n.n(ae),
      re = n("d682"),
      oe = n.n(re),
      se = n("c510"),
      le = n.n(se),
      ce = n("ac0d"),
      ue = n.n(ce),
      de = n("2b85"),
      pe = n.n(de),
      me = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e(
              "router-link",
              { attrs: { to: "/titles/" + this.title.titleId } },
              [
                e("div", { class: ie.a.hotTitle }, [
                  e("div", { class: ie.a.container }, [
                    e("img", {
                      directives: [
                        { name: "lazy", value: this.title.portraitImageUrl },
                      ],
                      key: this.title.titleId,
                      attrs: { alt: "", width: "70", height: "105" },
                      class: ie.a.icon,
                    }),
                    e(
                      "div",
                      { class: this.index > 3 ? ie.a.textsNotTop : ie.a.texts },
                      [
                        (function () {
                          switch (t.index) {
                            case 0:
                              return e("img", {
                                class: ie.a.rank,
                                attrs: { src: oe.a },
                              });
                            case 1:
                              return e("img", {
                                class: ie.a.rank,
                                attrs: { src: le.a },
                              });
                            case 2:
                              return e("img", {
                                class: ie.a.rank,
                                attrs: { src: ue.a },
                              });
                            default:
                              return e("h3", { class: ie.a.rank }, [t.index]);
                          }
                        })(),
                        e("p", { class: ie.a.title }, [this.title.name]),
                        e("p", { class: ie.a.author }, [this.title.author]),
                        e("p", { class: ie.a.count }, [
                          e("img", {
                            attrs: { src: pe.a },
                            class: ie.a.viewCountIcon,
                          }),
                          this.title.viewCount,
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]
            );
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "title", void 0),
          Object(i["c"])([Object(r["b"])()], t.prototype, "index", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      he = me,
      ge = n("8e44"),
      fe = n.n(ge),
      be = 3,
      ye = 30,
      we = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.created = function () {
            var e = this;
            0 === this.$store.state.ranking.model.titles.length &&
              this.$store.dispatch("ranking/fetchData").catch(function (t) {
                X(e.$router, t);
              });
          }),
          Object.defineProperty(t.prototype, "currentTitles", {
            get: function () {
              var e = this;
              return this.$store.state.ranking.model.titles.filter(function (
                t
              ) {
                return t.language === f.Title.Language.ENGLISH
                  ? e.$store.state.language.contentsStatus.en
                  : t.language === f.Title.Language.SPANISH
                  ? e.$store.state.language.contentsStatus.es
                  : void 0;
              });
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.render = function (e) {
            return e("div", [
              e("div", { class: fe.a.flexContainer }, [
                this.currentTitles.slice(0, be).map(function (t, n) {
                  return e(he, { attrs: { title: t, index: n } });
                }),
              ]),
              e("div", { class: fe.a.gridContainer }, [
                this.currentTitles.slice(be, ye).map(function (t, n) {
                  return e(he, { attrs: { title: t, index: n + be + 1 } });
                }),
              ]),
            ]);
          }),
          (t = Object(i["c"])(
            [Object(L["b"])({ components: { HotTitle: he } })],
            t
          )),
          t
        );
      })(r["c"]),
      ve = we,
      Ae = n("3e42"),
      ke = n.n(Ae),
      _e = n("f6a5"),
      Oe = n.n(_e),
      Se = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.currentIndex = 0), t;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.onClickRightCursor = function () {
            this.currentIndex + 3 !== this.currentTitles.length &&
              ((this.currentIndex += 1),
              (this.$el.querySelector("." + Oe.a.itemList).style.transform =
                "translateX(-" + 20 * this.currentIndex + "%)"));
          }),
          (t.prototype.onClickLeftCursor = function () {
            0 !== this.currentIndex &&
              ((this.currentIndex -= 1),
              (this.$el.querySelector("." + Oe.a.itemList).style.transform =
                "translateX(-" + 20 * this.currentIndex + "%)"));
          }),
          (t.prototype.order = function (e) {
            var t = e - this.currentIndex;
            return t < 0 ? t + this.currentTitles.length : t;
          }),
          Object.defineProperty(t.prototype, "currentTitles", {
            get: function () {
              var e = this;
              return this.titleList.featuredTitles.filter(function (t) {
                return t.language === f.Title.Language.ENGLISH
                  ? e.$store.state.language.contentsStatus.en
                  : t.language === f.Title.Language.SPANISH
                  ? e.$store.state.language.contentsStatus.es
                  : void 0;
              });
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.render = function (e) {
            return e("div", [
              e(K, [this.titleList.listName]),
              e("div", { class: Oe.a.horizontalList }, [
                e("div", {
                  class: Oe.a.leftCursor,
                  on: { click: this.onClickLeftCursor },
                }),
                e("div", { class: Oe.a.itemListWrapper }, [
                  e(
                    "div",
                    {
                      class: "" + Oe.a.itemList,
                      style:
                        "transform: translateX(-" +
                        20 * this.currentIndex +
                        ")",
                    },
                    [
                      this.currentTitles.map(function (t, n) {
                        return e(
                          "router-link",
                          {
                            attrs: { to: "/titles/" + t.titleId, tag: "div" },
                            class: "" + Oe.a.item,
                            style: {},
                          },
                          [
                            e("img", {
                              directives: [
                                { name: "lazy", value: t.portraitImageUrl },
                              ],
                              key: t.titleId,
                              class: Oe.a.image,
                              attrs: { alt: "" },
                            }),
                          ]
                        );
                      }),
                    ]
                  ),
                ]),
                e("div", {
                  class: Oe.a.rightCursor,
                  on: { click: this.onClickRightCursor },
                }),
              ]),
            ]);
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "titleList", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Te = Se;
    n("2b3d");
    function Pe(e, t) {
      var n = new URL(t);
      switch (n.protocol) {
        case "mangaplus:":
          switch (t.split("/")[3].split("?")[0]) {
            case "viewer":
              var a = n.searchParams.get("id");
              e.push("/viewer/" + a);
              break;
            case "detail":
              var i = n.searchParams.get("id");
              e.push("/titles/" + i);
              break;
            case "webview":
              window.location.href = n.searchParams.get("url");
          }
          break;
        default:
          window.location.href = t;
      }
    }
    var Ce,
      Ie = f.FeaturedTitlesView,
      Ee = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.model = new Ie()), t;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.beforeRouteLeave = function (e, t, n) {
            this.$store.commit("hideSettingModal"), n();
          }),
          (t.prototype.created = function () {
            var e = this;
            0 === this.$store.state.featured.model.contents.length &&
              this.$store.dispatch("featured/fetchData").catch(function (t) {
                X(e.$router, t);
              });
          }),
          (t.prototype.beforeDestroy = function () {}),
          (t.prototype.render = function (e) {
            var t = this;
            return e("div", [
              e("div", { class: ke.a.bannerContainer }, [
                e("img", {
                  attrs: {
                    src: this.$store.state.featured.model.mainBanner.imageUrl,
                  },
                  class: ke.a.largeBanner + " " + ke.a.banner,
                  on: {
                    click: function () {
                      return Pe(
                        t.$router,
                        t.$store.state.featured.model.mainBanner.action.url
                      );
                    },
                  },
                }),
                e("img", {
                  attrs: {
                    src: this.$store.state.featured.model.subBanner_1.imageUrl,
                  },
                  class: ke.a.smallBanner1 + " " + ke.a.banner,
                  on: {
                    click: function () {
                      return Pe(
                        t.$router,
                        t.$store.state.featured.model.subBanner_1.action.url
                      );
                    },
                  },
                }),
                e("img", {
                  attrs: {
                    src: this.$store.state.featured.model.subBanner_2.imageUrl,
                  },
                  class: ke.a.smallBanner2 + " " + ke.a.banner,
                  on: {
                    click: function () {
                      return Pe(
                        t.$router,
                        t.$store.state.featured.model.subBanner_2.action.url
                      );
                    },
                  },
                }),
              ]),
              this.$store.state.featured.model.contents.map(function (n) {
                var a = function () {
                  return n.banner
                    ? e("img", {
                        class: ke.a.contentsBanner + " " + ke.a.banner,
                        attrs: { src: n.banner.imageUrl },
                        on: {
                          click: function () {
                            return Pe(t.$router, n.banner.action.url);
                          },
                        },
                      })
                    : n.titleList
                    ? e(Te, { attrs: { titleList: n.titleList } })
                    : void 0;
                };
                return e("div", { class: ke.a.contents }, [a()]);
              }),
            ]);
          }),
          (t = Object(i["c"])(
            [Object(L["b"])({ components: { HorizontalTitleList: Te } })],
            t
          )),
          t
        );
      })(r["c"]),
      Le = Ee,
      Ne = (n("4c53"), n("5530")),
      De = n("5dfb"),
      je = n.n(De),
      Ve = n("be42"),
      xe = n.n(Ve),
      Re = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e(
            "button",
            {
              class:
                xe.a.btn +
                " " +
                ("default" === t.data.attrs.state ? xe.a.default : xe.a.done) +
                " " +
                t.data.class,
              on: { click: t.data.on.click },
            },
            [t.slots().default]
          );
        },
      }),
      Me = n("9400"),
      Ue = n.n(Me),
      Be = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.shareUrl = function () {
            return (
              "https://twitter.com/intent/tweet?text=" +
              encodeURIComponent(this.text) +
              "&url=" +
              encodeURIComponent(this.url)
            );
          }),
          (t.prototype.render = function (e) {
            return e(
              "a",
              {
                attrs: { href: this.shareUrl() },
                class: Ue.a.shareButton + " " + Ue.a.twitter,
              },
              [this.$t("TWEET")]
            );
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "url", void 0),
          Object(i["c"])([Object(r["b"])()], t.prototype, "text", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      He = Be,
      Fe = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.shareUrl = function () {
            return (
              "https://www.facebook.com/sharer/sharer.php?u=" +
              encodeURIComponent(this.url)
            );
          }),
          (t.prototype.render = function (e) {
            return e(
              "a",
              {
                attrs: { href: this.shareUrl() },
                class: Ue.a.shareButton + " " + Ue.a.facebook,
              },
              [this.$t("SHARE")]
            );
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "url", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Ge = Fe,
      We = n("fd5c"),
      qe = n.n(We),
      Ye = (n("9e30"), n("e072"), n("5a0c")),
      Qe = n.n(Ye),
      ze = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this,
              n =
                "en" === navigator.language || "es" === navigator.language
                  ? navigator.language
                  : "en";
            return (
              Qe()(n),
              e("div", { class: je.a.flexContainer }, [
                e("div", { class: je.a.left1 }, [
                  e("img", {
                    class: je.a.fitImage,
                    attrs: { src: this.topImage, alt: "" },
                  }),
                ]),
                e("div", { class: je.a.right1 }, [
                  e("h1", { class: je.a.title }, [this.titleProto.name]),
                  e("p", { class: je.a.author }, [this.titleProto.author]),
                  (function () {
                    if (t.isSimulReleased)
                      return e("img", {
                        attrs: { src: qe.a, alt: "" },
                        class: je.a.simulrelease,
                      });
                  })(),
                  (function () {
                    if (0 !== t.updateInfo)
                      return e("div", [
                        e("h6", { class: je.a.updateHeader }, [
                          t.$t("UPDATE_SCHEDULE"),
                        ]),
                        e("p", { class: je.a.updateInfo }, [
                          (function () {
                            var n = t.updateTiming,
                              a = Qe()(new Date(1e3 * t.updateInfo));
                            switch (n) {
                              case f.TitleDetailView.UpdateTiming.NOT_REGULARLY:
                                return e("span", [
                                  t.$t("NEW_CHAPTER_ARRIVES_ON"),
                                  e("br"),
                                  a.format("dddd, MMM DD, HH:mm"),
                                ]);
                              case f.TitleDetailView.UpdateTiming.MONDAY:
                              case f.TitleDetailView.UpdateTiming.TUESDAY:
                              case f.TitleDetailView.UpdateTiming.WEDNESDAY:
                              case f.TitleDetailView.UpdateTiming.THURSDAY:
                              case f.TitleDetailView.UpdateTiming.FRIDAY:
                              case f.TitleDetailView.UpdateTiming.SATURDAY:
                              case f.TitleDetailView.UpdateTiming.SUNDAY:
                                return e("span", [
                                  t.$t("NEW_CHAPTER_ARRIVES"),
                                  e("br"),
                                  t.$t("EVERY"),
                                  " ",
                                  a.format("dddd, HH:mm"),
                                ]);
                              case f.TitleDetailView.UpdateTiming.DAY:
                                return e("span", [
                                  t.$t("NEW_CHAPTER_ARRIVES"),
                                  e("br"),
                                  t.$t("EVERY_DAY"),
                                  " ",
                                  a.format("HH:mm"),
                                ]);
                            }
                          })(),
                        ]),
                        e("p", { class: je.a.updateDescription }, [
                          t.viewingPeriod,
                        ]),
                      ]);
                  })(),
                  e("div", { class: je.a.gridContainer }, [
                    e(
                      Re,
                      {
                        class: je.a.favoritedBtn,
                        attrs: {
                          state:
                            this.$store.state.detail.model[
                              this.titleProto.titleId
                            ] &&
                            this.$store.state.detail.model[
                              this.titleProto.titleId
                            ].isSubscribed
                              ? "done"
                              : "default",
                        },
                        on: {
                          click: function (e) {
                            t.$store.state.detail.model[t.titleProto.titleId]
                              .isSubscribed
                              ? t.$store.dispatch(
                                  "detail/unsubscribe",
                                  t.titleProto.titleId
                                )
                              : t.$store.dispatch(
                                  "detail/subscribe",
                                  t.titleProto.titleId
                                );
                          },
                        },
                      },
                      [
                        (function () {
                          return t.$store.state.detail.isLoading
                            ? "loading"
                            : t.$store.state.detail.model[
                                t.titleProto.titleId
                              ] &&
                              t.$store.state.detail.model[t.titleProto.titleId]
                                .isSubscribed
                            ? t.$t("doneFAVORITED")
                            : t.$t("addFAVORITED");
                        })(),
                      ]
                    ),
                    e("div", { class: je.a.gridItemFacebook }, [
                      e(Ge, {
                        attrs: Object(Ne["a"])(
                          {},
                          { url: this.sns.url, text: this.sns.body }
                        ),
                      }),
                    ]),
                    e("div", { class: je.a.gridItemTwitter }, [
                      e(He, {
                        attrs: Object(Ne["a"])(
                          {},
                          { url: this.sns.url, text: this.sns.body }
                        ),
                      }),
                    ]),
                  ]),
                ]),
              ])
            );
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "topImage", void 0),
          Object(i["c"])([Object(r["b"])()], t.prototype, "titleProto", void 0),
          Object(i["c"])([Object(r["b"])()], t.prototype, "sns", void 0),
          Object(i["c"])([Object(r["b"])()], t.prototype, "updateInfo", void 0),
          Object(i["c"])(
            [Object(r["b"])()],
            t.prototype,
            "updateTiming",
            void 0
          ),
          Object(i["c"])(
            [Object(r["b"])()],
            t.prototype,
            "viewingPeriod",
            void 0
          ),
          Object(i["c"])(
            [Object(r["b"])()],
            t.prototype,
            "isSimulReleased",
            void 0
          ),
          (t = Object(i["c"])(
            [
              Object(L["b"])({
                components: { FavoritedButton: Re, FB: Ge, Twitter: He },
              }),
            ],
            t
          )),
          t
        );
      })(r["c"]),
      Ke = ze,
      Xe = n("855f"),
      $e = n.n(Xe),
      Je = (n("4e82"), n("596b")),
      Ze = n.n(Je),
      et = n("c243"),
      tt = n.n(et),
      nt = n("f0e0"),
      at = n.n(nt),
      it = n("19d0"),
      rt = n.n(it),
      ot = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this,
              n =
                "en" === navigator.language || "es" === navigator.language
                  ? navigator.language
                  : "en";
            return (
              Qe()(n),
              e("div", { class: tt.a.chapterListItem }, [
                (function () {
                  return t.chapter.alreadyViewed
                    ? e(
                        "router-link",
                        {
                          class: tt.a.chapterWrapper,
                          attrs: {
                            tag: "div",
                            to: "/viewer/" + t.chapter.chapterId,
                          },
                        },
                        [
                          e("img", {
                            directives: [
                              { name: "lazy", value: t.chapter.thumbnailUrl },
                            ],
                            key: t.chapter.chapterId,
                            attrs: { alt: "thumbnail" },
                            class: tt.a.thumbnail_alreadyRead,
                          }),
                          e("p", { class: tt.a.name_alreadyRead }, [
                            t.chapter.name,
                          ]),
                          e("p", { class: tt.a.title_alreadyRead }, [
                            t.chapter.subTitle,
                          ]),
                          e("p", { class: tt.a.date_alreadyRead }, [
                            new Date(
                              1e3 * t.chapter.startTimeStamp
                            ).toLocaleDateString(navigator.language, {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }),
                          ]),
                        ]
                      )
                    : e(
                        "router-link",
                        {
                          class: tt.a.chapterWrapper,
                          attrs: {
                            tag: "div",
                            to: "/viewer/" + t.chapter.chapterId,
                          },
                        },
                        [
                          e("img", {
                            directives: [
                              { name: "lazy", value: t.chapter.thumbnailUrl },
                            ],
                            key: t.chapter.chapterId,
                            attrs: { alt: "thumbnail" },
                            class: tt.a.thumbnail,
                          }),
                          e("p", { class: tt.a.name }, [t.chapter.name]),
                          e("p", { class: tt.a.title }, [t.chapter.subTitle]),
                          e("p", { class: tt.a.date }, [
                            new Date(
                              1e3 * t.chapter.startTimeStamp
                            ).toLocaleDateString(navigator.language, {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }),
                          ]),
                        ]
                      );
                })(),
                e(
                  "router-link",
                  {
                    attrs: { to: "/comments/" + this.chapter.chapterId },
                    class: tt.a.commentContainer,
                  },
                  [
                    e("img", {
                      attrs: { src: at.a, alt: "commentIcon" },
                      class: tt.a.commentIcon,
                    }),
                  ]
                ),
                e("div", { class: tt.a.limitContainer }, [
                  (function () {
                    var n = Qe()(new Date(1e3 * t.chapter.endTimeStamp)),
                      a = Qe()();
                    if (a.add(7, "day").isAfter(n)) {
                      var i = n.format("MMM Do"),
                        r = n.format("H:mm");
                      return e("div", { class: tt.a.endTime }, [
                        e("img", {
                          attrs: { src: rt.a, alt: "commentIcon" },
                          class: tt.a.limitIcon,
                        }),
                        e("p", { class: tt.a.limitTime }, [
                          e("div", [
                            e("p", { class: tt.a.limitDate }, [i]),
                            e("p", { class: tt.a.limitDate }, [r]),
                          ]),
                        ]),
                      ]);
                    }
                  })(),
                ]),
              ])
            );
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "chapter", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      st = ot,
      lt = n("9b54"),
      ct = n.n(lt),
      ut = n("3e28"),
      dt = n.n(ut),
      pt = n("821e"),
      mt = n.n(pt),
      ht = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.ascSort = !1), t;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.sortChapters = function () {
            this.ascSort = !this.ascSort;
            var e = this.newChapters.slice().reverse();
            (this.newChapters = this.oldChapters.slice().reverse()),
              (this.oldChapters = e);
          }),
          (t.prototype.render = function (e) {
            var t = this;
            return e("div", [
              e("div", [
                e("div", { class: Ze.a.overviewTitleWrapper }, [
                  e("h6", { class: Ze.a.overviewTitle }, [
                    this.$i18n.t("OVERVIEW"),
                  ]),
                  e("p", { class: Ze.a.numberOfViews }, [
                    e("img", { attrs: { src: mt.a }, class: Ze.a.viewIcon }),
                    this.numberOfViews.toLocaleString(),
                  ]),
                ]),
                e("p", { class: Ze.a.overview }, [this.overview]),
              ]),
              e("div", { class: Ze.a.chapterHeader }, [
                e("h3", { class: Ze.a.message }, [this.nonAppearanceInfo]),
                e("div", { class: Ze.a.sort }, [
                  e("img", {
                    attrs: { src: this.ascSort ? dt.a : ct.a, alt: "sort" },
                    class: Ze.a.sortIcon,
                    on: { click: this.sortChapters },
                  }),
                ]),
              ]),
              this.newChapters.map(function (t) {
                return e(st, { attrs: Object(Ne["a"])({}, { chapter: t }) });
              }),
              (function () {
                if (0 != t.oldChapters.length && 0 != t.newChapters.length)
                  return e("div", { class: Ze.a.separator }, [
                    t.$t("CHAPTERS_NOT_AVAILABLE"),
                  ]);
              })(),
              this.oldChapters.map(function (t) {
                return e(st, { attrs: Object(Ne["a"])({}, { chapter: t }) });
              }),
            ]);
          }),
          Object(i["c"])(
            [Object(r["b"])()],
            t.prototype,
            "newChapters",
            void 0
          ),
          Object(i["c"])(
            [Object(r["b"])()],
            t.prototype,
            "oldChapters",
            void 0
          ),
          Object(i["c"])([Object(r["b"])()], t.prototype, "overview", void 0),
          Object(i["c"])([Object(r["b"])()], t.prototype, "rating", void 0),
          Object(i["c"])(
            [Object(r["b"])()],
            t.prototype,
            "nonAppearanceInfo",
            void 0
          ),
          Object(i["c"])(
            [Object(r["b"])()],
            t.prototype,
            "numberOfViews",
            void 0
          ),
          (t = Object(i["c"])(
            [Object(L["b"])({ components: { ChapterListItem: st } })],
            t
          )),
          t
        );
      })(r["c"]),
      gt = ht,
      ft = n("00df"),
      bt = n.n(ft),
      yt = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e("div", { class: bt.a.wrapper }, [
              this.items.map(function (n) {
                return e("div", { class: bt.a.container }, [
                  e("a", [
                    e("img", {
                      attrs: { src: n.banner.imageUrl },
                      class: bt.a.banner,
                      on: {
                        click: function (e) {
                          Pe(t.$router, n.banner.action.url);
                        },
                      },
                    }),
                  ]),
                  n.publisherNews &&
                    e("div", [
                      e("p", { class: bt.a.publisherName }, [
                        t.$i18n.t("LATEST_NEWS_FROM") +
                          " " +
                          n.publisherNews.publisherName,
                      ]),
                      e(vt, { attrs: { publisherNews: n.publisherNews } }),
                      e(
                        "router-link",
                        {
                          class: bt.a.news_showAll,
                          attrs: {
                            to:
                              "/publisher_news/" + n.publisherNews.publisherId,
                          },
                        },
                        [t.$i18n.t("SEE_ALL_NEWS")]
                      ),
                    ]),
                ]);
              }),
            ]);
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "items", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      wt = yt,
      vt = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this,
              n = this.$store.state.language.serviceStatus;
            Qe()(n);
            var a = Qe()(
              new Date(1e3 * this.publisherNews.publishedTimeStamp)
            ).format("MMM DD, YYYY ");
            return e("div", { class: bt.a.publisherNews }, [
              e("div", { class: bt.a.news_main }, [
                e("p", { class: bt.a.news_subject }, [
                  this.publisherNews.subject,
                ]),
                e("p", { class: bt.a.news_date }, [a]),
                e("p", { class: bt.a.news_description }, [
                  this.publisherNews.body,
                ]),
                e(
                  "a",
                  {
                    class: bt.a.news_checkNow,
                    on: {
                      click: function (e) {
                        return Pe(t.$router, t.publisherNews.action.url);
                      },
                    },
                  },
                  [this.$i18n.t("CHECK_NOW") + " >"]
                ),
              ]),
            ]);
          }),
          Object(i["c"])(
            [Object(r["b"])()],
            t.prototype,
            "publisherNews",
            void 0
          ),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      At = n("1406"),
      kt = n.n(At),
      _t = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            return e("div", { class: kt.a.container }, [
              e("h5", { class: kt.a.header }, [this.$t("RECOMMEND")]),
              e("nav", { class: kt.a.recommendContainer }, [
                e("ul", [
                  this.titles.map(function (t) {
                    return e("li", { class: kt.a.item }, [
                      e(
                        "router-link",
                        { attrs: { to: "/titles/" + t.titleId } },
                        [
                          e("img", {
                            directives: [
                              { name: "lazy", value: t.landscapeImageUrl },
                            ],
                            key: t.titleId,
                            attrs: { alt: t.name },
                            class: kt.a.fitImage,
                          }),
                          e("p", { class: kt.a.title }, [t.name]),
                        ]
                      ),
                    ]);
                  }),
                ]),
              ]),
            ]);
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "titles", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Ot = _t,
      St = {
        en: {
          100018: 200001,
          100002: 200002,
          100022: 200003,
          100007: 200005,
          100027: 200006,
          100030: 200007,
          100001: 200008,
          100008: 200009,
          100011: 200010,
          100023: 200011,
          100004: 200012,
          100016: 200013,
          100020: 200016,
          100026: 200017,
          100034: 200018,
          100017: 200019,
          100003: 200020,
          100006: 200021,
          100028: 200023,
          100021: 200024,
          100012: 200025,
          100040: 200026,
          100057: 200028,
          100056: 200031,
          100005: null,
          100009: 200030,
          100010: 200022,
          100013: null,
          100014: null,
          100015: null,
          100019: 200004,
          100024: null,
          100025: null,
          100029: null,
          100031: null,
          100032: null,
          100033: null,
          100035: null,
          100036: null,
          100037: null,
          100038: null,
          100039: null,
          100041: null,
          100042: null,
          100043: 200027,
          100044: null,
          100045: null,
          100046: null,
          100047: null,
          100048: null,
          100049: null,
          100050: null,
          100051: null,
          100052: null,
          100053: null,
          100054: null,
          100055: null,
          100059: 200029,
          100060: null,
          100061: null,
          100062: null,
          100063: null,
          100064: null,
          100065: null,
          100066: null,
          100067: null,
        },
        es: {
          200001: 100018,
          200002: 100002,
          200003: 100022,
          200005: 100007,
          200006: 100027,
          200007: 100030,
          200008: 100001,
          200009: 100008,
          200010: 100011,
          200011: 100023,
          200012: 100004,
          200013: 100016,
          200016: 100020,
          200017: 100026,
          200018: 100034,
          200019: 100017,
          200020: 100003,
          200021: 100006,
          200023: 100028,
          200024: 100021,
          200025: 100012,
          200026: 100040,
          200028: 100057,
          200031: 100056,
          200030: 100009,
          200022: 100010,
          200004: 100019,
          200027: 100043,
          200029: 100059,
          200014: null,
          200015: null,
        },
      },
      Tt = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.created = function () {
            var e = this;
            (this.id = this.$route.params["id"]),
              this.$store
                .dispatch("detail/fetchData", this.id)
                .catch(function (t) {
                  X(e.$router, t);
                });
          }),
          (t.prototype.render = function (e) {
            var t,
              n = this,
              a =
                null === (t = this.$store.state.detail) || void 0 === t
                  ? void 0
                  : t.model[this.id];
            if (!a) return e("vc-fragment");
            var i = (function () {
              switch (a.rating) {
                case f.TitleDetailView.Rating.ALLAGE:
                  return "ALLAGE";
                case f.TitleDetailView.Rating.MATURE:
                  return "MATURE";
                case f.TitleDetailView.Rating.TEEN:
                  return "TEEN";
                case f.TitleDetailView.Rating.TEENPLUS:
                  return "TEENPLUS";
              }
            })();
            return e("div", { class: $e.a.mainContainer }, [
              (function () {
                if (n.$store.state.detail.model[n.id])
                  return e("div", [
                    e(Ke, {
                      attrs: {
                        sns: a.sns,
                        titleProto: a.title,
                        updateInfo: a.nextTimeStamp,
                        updateTiming: a.updateTiming,
                        viewingPeriod: a.viewingPeriodDescription,
                        isSimulReleased: a.isSimulReleased,
                        topImage: a.titleImageUrl,
                      },
                    }),
                    a.titleBanners.length > 0 &&
                      e("div", { class: $e.a.banners }, [
                        a.titleBanners.map(function (t) {
                          return e("img", {
                            attrs: { src: t.imageUrl },
                            class: $e.a.banner,
                            on: {
                              click: function () {
                                Pe(n.$router, t.action.url);
                              },
                            },
                          });
                        }),
                      ]),
                    e("div", { class: $e.a.flexContainer }, [
                      e("main", { class: $e.a.main }, [
                        e(gt, {
                          attrs: {
                            newChapters: a.firstChapterList,
                            oldChapters: a.lastChapterList,
                            overview: a.overview,
                            nonAppearanceInfo: a.nonAppearanceInfo,
                            numberOfViews: a.numberOfViews,
                            rating: i,
                          },
                        }),
                      ]),
                      e("aside", { class: $e.a.sub }, [
                        e(wt, { attrs: { items: a.publisherItems } }),
                        0 !==
                          n.$store.state.detail.model[n.id].recommendedTitleList
                            .length &&
                          e(Ot, { attrs: { titles: a.recommendedTitleList } }),
                      ]),
                    ]),
                  ]);
              })(),
            ]);
          }),
          (t = Object(i["c"])(
            [
              Object(L["b"])({
                components: { "vc-fragment": l },
                metaInfo: function () {
                  var e = this.$store.state.detail.model[
                      this.$route.params["id"]
                    ],
                    t = e
                      ? e.title.name + " - " + e.title.author
                      : "MANGA Plus by SHUEISHA",
                    n = e ? "" + e.overview : "Loading...",
                    a = null != St["en"][this.$route.params["id"]],
                    i = null != St["es"][this.$route.params["id"]],
                    r = a || i,
                    o = r
                      ? a
                        ? St["en"][this.$route.params["id"]]
                        : St["es"][this.$route.params["id"]]
                      : 0,
                    s = r ? (a ? "es" : "en") : "",
                    l = i
                      ? "Somos un lector de manga oficial entregado desde Japón. Leer manga gratis y simultáneamente."
                      : "We are an official manga reader delivered from Japan. Read manga totally free and fastest!";
                  return {
                    title: t,
                    titleTemplate: "%s | MANGA Plus",
                    meta: [
                      {
                        hid: "description",
                        name: "description",
                        content: l + "\n " + t + " | " + n,
                      },
                    ],
                    link: r
                      ? [
                          {
                            rel: "alternate",
                            hreflang: s,
                            href:
                              "https://mangaplus.shueisha.co.jp/titles/" + o,
                          },
                        ]
                      : [],
                  };
                },
              }),
            ],
            t
          )),
          t
        );
      })(r["c"]),
      Pt = Tt,
      Ct = n("c9f1"),
      It = n.n(Ct),
      Et = n("6f17"),
      Lt = n.n(Et),
      Nt = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            return e(
              "router-link",
              {
                attrs: { to: "/titles/" + this.title.titleId, tag: "div" },
                class: Lt.a.allTitle,
              },
              [
                e("img", {
                  directives: [
                    { name: "lazy", value: this.title.portraitImageUrl },
                  ],
                  attrs: { alt: this.title.name },
                  class: Lt.a.image,
                  key: this.title.titleId,
                }),
                e("p", { class: Lt.a.title }, [this.title.name]),
                e("p", { class: Lt.a.author }, [this.title.author]),
              ]
            );
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "title", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Dt = Nt,
      jt = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.titles = []), t;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.created = function () {
            var e = this;
            0 === this.$store.state.mangaList.model.titles.length &&
              this.$store.dispatch("mangaList/fetchData").catch(function (t) {
                X(e.$router, t);
              });
          }),
          (t.prototype.render = function (e) {
            var t = this,
              n = this.$store.state.mangaList.model.titles
                .filter(function (e) {
                  return e.language === f.Title.Language.ENGLISH
                    ? t.$store.state.language.contentsStatus.en
                    : e.language === f.Title.Language.SPANISH
                    ? t.$store.state.language.contentsStatus.es
                    : void 0;
                })
                .map(function (t) {
                  return e(Dt, { attrs: { title: t } });
                });
            return e("div", { class: It.a.allTitles }, [n]);
          }),
          (t = Object(i["c"])(
            [Object(L["b"])({ components: { AllTitle: Dt } })],
            t
          )),
          t
        );
      })(r["c"]),
      Vt = jt,
      xt = n("513e"),
      Rt = n.n(xt),
      Mt = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.beforeRouteLeave = function (e, t, n) {
            this.$store.commit("hideSettingModal"), n();
          }),
          (t.prototype.render = function (e) {
            return e("div", { class: Rt.a.mangaList }, [
              e("div", { class: Rt.a.header }, [
                e(K, { class: Rt.a.title }, [this.$t("MANGALIST")]),
                e("nav", { class: "toggle" }, [
                  e("ul", [
                    e("li", { class: Rt.a.toggleItem }, [
                      e(
                        "router-link",
                        {
                          attrs: {
                            to: "/manga_list/all",
                            "active-class": Rt.a.linkActive,
                          },
                        },
                        [this.$t("ALL")]
                      ),
                    ]),
                    e("li", { class: Rt.a.toggleItem }, [
                      e(
                        "router-link",
                        {
                          attrs: {
                            to: "/manga_list/hot",
                            "active-class": Rt.a.linkActive,
                          },
                        },
                        [this.$t("HOTTEST")]
                      ),
                    ]),
                  ]),
                ]),
              ]),
              e("router-view"),
            ]);
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Ut = Mt,
      Bt = n("2638"),
      Ht = n.n(Bt),
      Ft = n("0a63"),
      Gt = n.n(Ft),
      Wt = n("8b7a"),
      qt = n.n(Wt),
      Yt = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e(
              "router-link",
              { attrs: { to: "/titles/" + this.title.titleId } },
              [
                e("div", { class: qt.a.rankingTitle }, [
                  e("img", {
                    directives: [
                      { name: "lazy", value: this.title.portraitImageUrl },
                    ],
                    key: this.title.titleId,
                    attrs: { alt: this.title.name },
                    class: qt.a.titleImg,
                  }),
                  e("div", { class: qt.a.titleDetail }, [
                    (function () {
                      switch (t.index) {
                        case 0:
                          return e("img", {
                            attrs: { src: oe.a },
                            class: qt.a.icon,
                          });
                        case 1:
                          return e("img", {
                            attrs: { src: le.a },
                            class: qt.a.icon,
                          });
                        case 2:
                          return e("img", {
                            attrs: { src: ue.a },
                            class: qt.a.icon,
                          });
                        default:
                          return e(
                            "p",
                            { class: qt.a.icon + " " + qt.a.rankingNumber },
                            [t.index + 1]
                          );
                      }
                    })(),
                    e("p", { class: qt.a.title }, [" ", this.title.name]),
                    e("p", { class: qt.a.author }, [" ", this.title.author]),
                    e("p", { class: qt.a.viewCount }, [
                      e("img", {
                        class: qt.a.viewCountIcon,
                        attrs: { src: pe.a },
                      }),
                      this.title.viewCount.toLocaleString(),
                    ]),
                  ]),
                ]),
              ]
            );
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "title", void 0),
          Object(i["c"])([Object(r["b"])()], t.prototype, "index", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Qt = Yt,
      zt = n("f21f"),
      Kt = n.n(zt),
      Xt = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.click = function () {
            this.$destroy(), this.$el.parentNode.removeChild(this.$el);
          }),
          (t.prototype.onClickImage = function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              Pe(this.$router, this.popup.oneImage.action.url);
          }),
          (t.prototype.mounted = function () {
            this.popup.oneImage && (document.body.style.position = "fixed");
          }),
          (t.prototype.destroyed = function () {
            document.body.style.position = "";
          }),
          (t.prototype.render = function (e) {
            return this.popup.oneImage
              ? e("div", { class: Kt.a.container, on: { click: this.click } }, [
                  e("img", {
                    attrs: { src: this.popup.oneImage.imageUrl },
                    class: Kt.a.oneImage,
                    on: { click: this.onClickImage },
                  }),
                ])
              : e("template");
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "popup", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      $t = n("5e49"),
      Jt = n.n($t),
      Zt = n("eda8"),
      en = n.n(Zt),
      tn = n("d72e"),
      nn = n.n(tn),
      an = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e("p", { class: nn.a.badge }, [t.slots().default]);
        },
      }),
      rn = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e("div", { class: en.a.titleWrapper }, [
              e(
                "router-link",
                { attrs: { to: "/titles/" + this.title.title.titleId } },
                [
                  e("div", { class: en.a.title }, [
                    e("img", {
                      directives: [
                        {
                          name: "lazy",
                          value: this.title.title.landscapeImageUrl,
                        },
                      ],
                      class: en.a.titleImage,
                      key: this.title.title.titleId,
                      attrs: { alt: "ComicImage" },
                    }),
                    e("div", { class: en.a.titleDescription }, [
                      e("p", { class: en.a.titleName }, [
                        this.title.title.name,
                      ]),
                      e("p", { class: en.a.author }, [this.title.title.author]),
                    ]),
                  ]),
                ]
              ),
              e(
                "router-link",
                {
                  attrs: { to: "/viewer/" + this.title.chapterId, tag: "div" },
                  class: en.a.chapter,
                },
                [
                  e("div", { class: en.a.chapterTitleWrapper }, [
                    e("p", { class: en.a.chapterTitle }, [
                      this.title.chapterName,
                    ]),
                    (function () {
                      if (t.title.isLatest) return e(an, [t.$t("New")]);
                    })(),
                  ]),
                  e("p", { class: en.a.chapterDescription }, [
                    this.title.chapterSubTitle,
                  ]),
                  e("p", { class: en.a.latest }, [this.$t("READ_LATEST")]),
                ]
              ),
            ]);
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "title", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      on = rn,
      sn = n("f877"),
      ln = n.n(sn),
      cn = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e("div", [
              e(K, [this.group.groupName]),
              e("div", { class: ln.a.gridContainer }, [
                this.group.titles
                  .filter(function (e) {
                    return e.title.language === f.Title.Language.ENGLISH
                      ? t.$store.state.language.contentsStatus.en
                      : e.title.language === f.Title.Language.SPANISH
                      ? t.$store.state.language.contentsStatus.es
                      : void 0;
                  })
                  .map(function (t) {
                    return e(on, { attrs: { title: t } });
                  }),
              ]),
            ]);
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "group", void 0),
          (t = Object(i["c"])(
            [Object(L["b"])({ components: { UpdatedTitle: on } })],
            t
          )),
          t
        );
      })(r["c"]),
      un = cn,
      dn = n("6ae4"),
      pn = n.n(dn),
      mn = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = function e(t) {
              t && (t.preventDefault(), t.stopPropagation());
              var n = window.pageYOffset;
              window.scrollTo(0, Math.floor(0.7 * n)),
                n > 0 && window.setTimeout(e, 10);
            };
            return e("div", { class: pn.a.btn, on: { click: t } }, [
              e("div", { class: pn.a.icon }),
            ]);
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      hn = mn,
      gn = n("2bd2"),
      fn = n("ebb6"),
      bn = n("a744"),
      yn = n("69dd"),
      wn = n("d263"),
      vn = f.WebHomeView,
      An = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.model = new vn()),
            (t.isWide = !1),
            (t.buttonClass = ""),
            (t.scroll = new gn["a"]()),
            t
          );
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.beforeRouteLeave = function (e, t, n) {
            this.$store.commit("hideSettingModal"), n();
          }),
          (t.prototype.created = function () {
            var e = this;
            window.addEventListener("resize", this.handleResizeEvent, !1),
              0 === this.$store.state.home.model.topBanners.length &&
                this.$store.dispatch("home/fetchData").catch(function (t) {
                  X(e.$router, t);
                }),
              window.addEventListener("scroll", this.handleScrollEvent, !1),
              (this.subscription = this.scroll
                .asObservable()
                .pipe(
                  Object(fn["a"])(function (e) {
                    return e > 100;
                  })
                )
                .pipe(Object(bn["a"])(!1))
                .pipe(Object(yn["a"])())
                .pipe(Object(wn["a"])(1))
                .pipe(
                  Object(fn["a"])(function (e) {
                    return e ? Jt.a.showBtn : Jt.a.hideBtn;
                  })
                )
                .subscribe(function (t) {
                  e.buttonClass = t;
                })),
              this.handleResizeEvent();
          }),
          (t.prototype.handleResizeEvent = function () {
            this.isWide = window.innerWidth > 768;
          }),
          (t.prototype.handleScrollEvent = function () {
            this.scroll.next(scrollY);
          }),
          (t.prototype.beforeDestroy = function () {
            window.removeEventListener("resize", this.handleResizeEvent, !1),
              this.subscription.unsubscribe();
          }),
          (t.prototype.render = function (e) {
            var t = this;
            return (
              console.log("hoge", this.$store.state.home.model.popup),
              e("div", [
                e(hn, { class: "" + this.buttonClass }),
                e("div", { class: Jt.a.fluidImage }, [
                  e("img", {
                    class: Jt.a.topImage,
                    attrs: { src: this.isWide ? n("ccc1") : n("10b2") },
                  }),
                ]),
                e("div", { class: Jt.a.flexContainer }, [
                  e("main", { class: Jt.a.main }, [
                    e(
                      "carousel",
                      {
                        attrs: {
                          "per-page": 1,
                          autoplayTimeout: 3e3,
                          paginationActiveColor: "#ffd600",
                          paginationColor: "#6e6e6e",
                          autoplay: !0,
                          paginationSize: this.isWide ? 10 : 5,
                        },
                        ref: "carousel",
                      },
                      [
                        this.$store.state.home.model.topBanners.map(function (
                          n
                        ) {
                          return e("slide", [
                            e("img", {
                              attrs: { src: n.imageUrl },
                              class: Jt.a.banner,
                              on: {
                                click: function (e) {
                                  Pe(t.$router, n.action.url);
                                },
                              },
                            }),
                          ]);
                        }),
                      ]
                    ),
                    this.$store.state.home.model.groups.map(function (t) {
                      var n = { attrs: { group: t } };
                      return e("div", { class: Jt.a.group }, [
                        e(un, Ht()([{}, n])),
                      ]);
                    }),
                  ]),
                  e("aside", { class: Jt.a.sub }, [
                    e("div", { class: Jt.a.subInnerWrapper }, [
                      e("div", { class: Jt.a.subHeader }, [
                        e(K, { class: Jt.a.rankingHeaderTitle }, [
                          this.$t("HOTTEST"),
                        ]),
                        e(
                          "router-link",
                          {
                            attrs: { to: "/manga_list/hot" },
                            class: Jt.a.subShowAll,
                          },
                          [this.$t("VIEW_ALL")]
                        ),
                      ]),
                      this.$store.state.home.model.ranking
                        .filter(function (e) {
                          return e.language === f.Title.Language.ENGLISH
                            ? t.$store.state.language.contentsStatus.en
                            : e.language === f.Title.Language.SPANISH
                            ? t.$store.state.language.contentsStatus.es
                            : void 0;
                        })
                        .map(function (t, n) {
                          var a = { attrs: { title: t, index: n } };
                          return e("div", { class: Jt.a.rankingTitle }, [
                            e(Qt, Ht()([{}, a])),
                          ]);
                        }),
                    ]),
                  ]),
                ]),
                this.$store.state.home.model.popup &&
                  e(Xt, {
                    attrs: { popup: this.$store.state.home.model.popup },
                  }),
              ])
            );
          }),
          (t = Object(i["c"])(
            [
              Object(L["b"])({
                components: {
                  Carousel: Ft["Carousel"],
                  Slide: Ft["Slide"],
                  RankingTitle: Qt,
                  UpdatedTitles: un,
                  ScrollToTopButton: hn,
                },
                metaInfo: function () {
                  return {
                    link: [
                      {
                        rel: "canonical",
                        href: "https://mangaplus.shueisha.co.jp/updates",
                      },
                    ],
                    meta: [
                      {
                        hid: "description",
                        name: "description",
                        content:
                          '"MANGA Plus by SHUEISHA" is the official manga reader from Shueisha Inc., and is available globally.\nWe publish the greatest manga in the world such as Naruto, Dragon Ball, One Piece, Bleach and other more.\nYou can read the latest chapters of the best manga for FREE, DAILY, and SIMULTANEOUSLY with its release in Japan!! ',
                      },
                    ],
                  };
                },
              }),
            ],
            t
          )),
          t
        );
      })(r["c"]),
      kn = An,
      _n = n("a925"),
      On = (n("c975"), n("25b4")),
      Sn = n.n(On),
      Tn = n("428e"),
      Pn = n.n(Tn),
      Cn = n("9cc0"),
      In = n.n(Cn),
      En = n("8d45"),
      Ln = n.n(En),
      Nn = n("5eec"),
      Dn = n.n(Nn),
      jn = n("f6ca"),
      Vn = n.n(jn),
      xn = n("4dcf"),
      Rn = n.n(xn),
      Mn = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.isShowingNavigation = !0), t;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.toggleModal = function () {
            this.$emit("toggleModal");
          }),
          (t.prototype.toggleSideMenu = function () {
            this.$emit("toggleSideMenu");
          }),
          (t.prototype.render = function (e) {
            return e(
              "div",
              {
                class:
                  Rn.a.header +
                  " " +
                  (this.isShowingNavigation ? Rn.a.appear : Rn.a.hidden),
              },
              [
                e("div", { class: Rn.a.imageContainer }, [
                  e("router-link", { attrs: { to: "/updates" } }, [
                    e("img", {
                      attrs: { src: n("be59"), alt: "logo", width: "130" },
                      class: Rn.a.logo,
                    }),
                  ]),
                ]),
                e("div", { class: Rn.a.detailContainer }, [
                  e(
                    "router-link",
                    { attrs: { to: "/titles/" + this.titleId } },
                    [e("h1", { class: Rn.a.title }, [this.title])]
                  ),
                  e(
                    "div",
                    {
                      on: { click: this.toggleSideMenu },
                      class: Rn.a.chapterTitleWrapper,
                    },
                    [
                      e("p", { class: Rn.a.chapterTitle }, [
                        " ",
                        this.chapterTitle,
                      ]),
                    ]
                  ),
                ]),
                e(
                  "div",
                  {
                    class: Rn.a.settingsContainer,
                    on: { click: this.toggleModal },
                  },
                  [
                    e("div", { class: Rn.a.kebabMenu }, [
                      e("div", { class: Rn.a.circle }),
                      e("div", { class: Rn.a.circle }),
                      e("div", { class: Rn.a.circle }),
                    ]),
                  ]
                ),
              ]
            );
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "title", void 0),
          Object(i["c"])([Object(r["b"])()], t.prototype, "titleId", void 0),
          Object(i["c"])(
            [Object(r["b"])()],
            t.prototype,
            "chapterTitle",
            void 0
          ),
          Object(i["c"])(
            [Object(r["b"])()],
            t.prototype,
            "isShowingNavigation",
            void 0
          ),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Un = Mn,
      Bn = n("721c"),
      Hn = n.n(Bn),
      Fn = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.shareFacebookUrl = function () {
            if (this.sns)
              return (
                "https://www.facebook.com/sharer/sharer.php?u=" +
                encodeURIComponent(this.sns.url)
              );
          }),
          (t.prototype.shareTwitterUrl = function () {
            if (this.sns)
              return (
                "https://twitter.com/intent/tweet?text=" +
                encodeURIComponent(this.sns.url) +
                "&url=" +
                encodeURIComponent(this.sns.body)
              );
          }),
          (t.prototype.onChangeMode = function (e) {
            this.$emit(
              "toggleMode",
              e.target.value === Ce.horizontal ? Ce.horizontal : Ce.vertical
            );
          }),
          (t.prototype.onChangeQuarity = function (e) {
            this.$emit("toggleQuarity", e.target.value);
          }),
          (t.prototype.render = function (e) {
            var t = this;
            return e(
              "div",
              {
                class: Hn.a.modal,
                directives: [{ name: "show", value: this.isShowingModal }],
                on: {
                  click: function (e) {
                    t.$emit("click");
                  },
                },
              },
              [
                e(
                  "div",
                  {
                    class: Hn.a.settings,
                    on: {
                      click: function (e) {
                        e.stopPropagation();
                      },
                    },
                  },
                  [
                    e("div", { class: Hn.a.modeContainer }, [
                      e("div", { class: Hn.a.quarityContainer }, [
                        e("p", { class: Hn.a.modeMessage }, [
                          this.$t("PAGE_RESOLUTION"),
                        ]),
                        e("div", { class: Hn.a.quaritySelection }, [
                          e("div", { class: Hn.a.quarity }, [
                            e("input", {
                              attrs: {
                                type: "radio",
                                name: "quarity",
                                value: "low",
                                id: "quarity-low",
                              },
                              class: Hn.a.viewMode,
                              domProps: { checked: "low" === this.quarity },
                              on: { change: this.onChangeQuarity },
                            }),
                            e("label", { attrs: { for: "quarity-low" } }, [
                              this.$i18n.t("LOW"),
                            ]),
                          ]),
                          e("div", { class: Hn.a.quarity }, [
                            e("input", {
                              attrs: {
                                type: "radio",
                                name: "quarity",
                                value: "high",
                                id: "quarity-high",
                              },
                              class: Hn.a.viewMode,
                              domProps: { checked: "high" === this.quarity },
                              on: { change: this.onChangeQuarity },
                            }),
                            e("label", { attrs: { for: "quarity-high" } }, [
                              this.$i18n.t("MEDIUM"),
                            ]),
                          ]),
                          e("div", { class: Hn.a.quarity }, [
                            e("input", {
                              attrs: {
                                type: "radio",
                                name: "quarity",
                                value: "super_high",
                                id: "quarity-super-high",
                              },
                              class: Hn.a.viewMode,
                              domProps: {
                                checked: "super_high" === this.quarity,
                              },
                              on: { change: this.onChangeQuarity },
                            }),
                            e(
                              "label",
                              { attrs: { for: "quarity-super-high" } },
                              [this.$i18n.t("HIGH")]
                            ),
                          ]),
                        ]),
                      ]),
                      e("p", { class: Hn.a.modeMessage }, [
                        this.$t("READING_DIRECTION"),
                      ]),
                      e("div", { class: Hn.a.modeItemWrapper }, [
                        e("input", {
                          attrs: {
                            type: "radio",
                            name: "mode",
                            value: "vertical",
                            id: "mode-vertical",
                          },
                          class: Hn.a.viewMode,
                          domProps: { checked: this.mode === Ce.vertical },
                          on: { change: this.onChangeMode },
                        }),
                        e("label", { attrs: { for: "mode-vertical" } }, [
                          " Vertical",
                        ]),
                      ]),
                      e("div", { class: Hn.a.modeItemWrapper }, [
                        e("input", {
                          attrs: {
                            type: "radio",
                            name: "mode",
                            value: "horizontal",
                            id: "mode-horizontal",
                            disabled: !this.canChangeMode,
                          },
                          class: Hn.a.viewMode,
                          domProps: { checked: this.mode === Ce.horizontal },
                          on: { change: this.onChangeMode },
                        }),
                        e("label", { attrs: { for: "mode-horizontal" } }, [
                          " Horizontal",
                        ]),
                      ]),
                    ]),
                    e("div", { class: Hn.a.shareContainer }, [
                      e("p", { class: Hn.a.share }, [this.$t("SHARE")]),
                      e("br"),
                      e(
                        "a",
                        {
                          class: Hn.a.facebook + " " + Hn.a.shareButton,
                          attrs: {
                            href: this.shareFacebookUrl(),
                            target: "_blank",
                          },
                        },
                        [this.$t("SHARE")]
                      ),
                      e(
                        "a",
                        {
                          class: Hn.a.twitter + " " + Hn.a.shareButton,
                          attrs: {
                            href: this.shareTwitterUrl(),
                            target: "_blank",
                          },
                        },
                        [this.$t("TWEET")]
                      ),
                    ]),
                  ]
                ),
              ]
            );
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "mode", void 0),
          Object(i["c"])([Object(r["b"])()], t.prototype, "sns", void 0),
          Object(i["c"])([Object(r["b"])()], t.prototype, "chapterId", void 0),
          Object(i["c"])(
            [Object(r["b"])()],
            t.prototype,
            "canChangeMode",
            void 0
          ),
          Object(i["c"])(
            [Object(r["b"])()],
            t.prototype,
            "isShowingModal",
            void 0
          ),
          Object(i["c"])([Object(r["b"])()], t.prototype, "quarity", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Gn = Fn,
      Wn = n("808d"),
      qn = n("a748"),
      Yn = n("9f2d"),
      Qn = n("2e6e"),
      zn = n.n(Qn),
      Kn = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            return e(
              "div",
              {
                class:
                  zn.a.sideMenu +
                  " " +
                  (this.isShowingSideMenu ? zn.a.appear : zn.a.hidden),
              },
              [
                e(
                  "div",
                  {
                    class:
                      zn.a.modal +
                      " " +
                      (this.isShowingSideMenu ? zn.a.appear : zn.a.hidden),
                  },
                  [
                    e("div", { class: zn.a.chapterList }, [
                      e("ul", [
                        this.chapters.map(function (t) {
                          return e(
                            "router-link",
                            {
                              attrs: {
                                to: "/viewer/" + t.chapterId,
                                tag: "li",
                                "active-class": zn.a.routerActive,
                              },
                              class: zn.a.chapter,
                            },
                            [t.name]
                          );
                        }),
                      ]),
                    ]),
                  ]
                ),
              ]
            );
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "chapters", void 0),
          Object(i["c"])(
            [Object(r["b"])()],
            t.prototype,
            "isShowingSideMenu",
            void 0
          ),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Xn = Kn,
      $n = n("9904"),
      Jn = n.n($n),
      Zn = n("3068"),
      ea = n.n(Zn),
      ta = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.show = !0), t;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.created = function () {
            this.show =
              void 0 === localStorage.getItem("gdpr") ||
              "true" !== localStorage.getItem("gdpr");
          }),
          (t.prototype.render = function (e) {
            var t = this;
            return e(
              "div",
              {
                class: ea.a.container,
                directives: [{ name: "show", value: this.show }],
              },
              [
                e("div", { class: ea.a.yellow }),
                e("img", {
                  class: ea.a.image,
                  attrs: { src: n("7078"), alt: "" },
                }),
                e("div", { class: ea.a.body }, [
                  e("p", { class: ea.a.message }, [
                    e("span", [
                      "We use cookies to analyze traffic and improve experience. Just wanted to let you know! Learn more about cookies and similar technologies",
                      " ",
                      e(
                        "a",
                        {
                          attrs: {
                            href:
                              "https://mangaplus.shueisha.co.jp/static/privacypolicy/eng/",
                          },
                        },
                        [" ", "here"]
                      ),
                      ".",
                    ]),
                  ]),
                  e(
                    "button",
                    {
                      class: ea.a.btn,
                      on: {
                        click: function () {
                          localStorage.setItem("gdpr", "true"), (t.show = !1);
                        },
                      },
                    },
                    [e("span", ["Okay, "]), e("span", ["Got it"])]
                  ),
                ]),
              ]
            );
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      na = ta,
      aa = function () {
        for (
          var e = ["iPod", "iPad", "iPhone", "Android"], t = 0;
          t < e.length;
          t++
        )
          if (navigator.userAgent.indexOf(e[t]) > 0) return e[t];
        return "Other";
      };
    (function (e) {
      (e["vertical"] = "vertical"), (e["horizontal"] = "horizontal");
    })(Ce || (Ce = {}));
    var ia = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.model = null),
            (t.isShowingNavigation = !0),
            (t.mode = Ce.vertical),
            (t.quarity = "low"),
            (t.currentPageNumber = 1),
            (t.numberOfPages = 0),
            (t.toggleNavigationSubject = new gn["a"]()),
            (t.toggleSideMenuSubjcet = new gn["a"]()),
            (t.horizontalOption = {
              startPageNumber: 1,
              direction: Ce.horizontal,
            }),
            (t.verticalOption = {
              startPageNumber: 1,
              spread: "single",
              direction: Ce.vertical,
              enabledJoinPages: !0,
              verticalPageMargin: 30,
              monospaced: "100%",
            }),
            (t.isShowingSideMenu = !1),
            (t.isShowingModal = !1),
            t
          );
        }
        var n;
        return (
          Object(i["d"])(t, e),
          (n = t),
          (t.prototype.heightAdjust = function () {
            var e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", e + "px");
          }),
          (t.prototype.destroyed = function () {
            this.t.off("tap_center", this.tapOrClickCenter),
              this.t.off("reset_surface", this.onResetSurface),
              this.t.off("click_center", this.tapOrClickCenter),
              this.t.off("viewer_opened", this.onViewerOpened),
              this.t.off("after_move_page", this.onAfterMovePage),
              document.documentElement.style.removeProperty("--vh"),
              window.removeEventListener("resize", this.heightAdjust);
          }),
          (t.prototype.created = function () {
            this.quarity = localStorage.getItem("quarity") || "high";
          }),
          (t.prototype.mounted = function () {
            var e = this;
            (this.id = this.$route.params["chapterId"]),
              S.instance()
                .fetchViewerData(parseInt(this.id), this.quarity)
                .then(function (t) {
                  if (t.data.error) {
                    var a = "en" === e.$store.state.language.serviceStatus,
                      i = a
                        ? t.data.error.englishPopup
                        : t.data.error.spanishPopup;
                    alert(i.body);
                  } else (e.model = t.data.success.mangaViewer), (e.mode = t.data.success.mangaViewer.isVerticalOnly ? Ce.vertical : n.loadMode()), e.loadZao();
                })
                .catch(function (t) {
                  X(e.$router, t);
                });
            var t = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", t + "px"),
              window.addEventListener("resize", this.heightAdjust);
          }),
          (t.prototype.createLastPage = function (e) {
            var t = document
              .querySelector("#last-page")
              .querySelector(".wrapper");
            while (t.firstChild) t.removeChild(t.firstChild);
            var n = document.createElement("div");
            n.className = Vn.a.chapterContainer;
            var a = document.createElement("div");
            switch (((a.className = Vn.a.thumbnailContainer), e.chapterType)) {
              case f.Page.ChapterType.SEQUENCE:
              case f.Page.ChapterType.NOSEQUENCE:
                var i = document.createElement("img");
                (i.src = e.nextChapter.thumbnailUrl),
                  (i.className = Vn.a.nextChapterThumbnail),
                  a.appendChild(i);
                break;
              case f.Page.ChapterType.LATEST:
                if (0 !== e.nextTimeStamp) {
                  var r = document.createElement("div");
                  r.className = Vn.a.latestWrapper;
                  var o = document.createElement("p");
                  (o.className = Vn.a.comming),
                    (o.innerText = "THE NEXT CHAPTER WILL ARRIVE ON");
                  var s = document.createElement("p");
                  (s.className = Vn.a.date),
                    (s.innerText = new Date(
                      1e3 * e.nextTimeStamp
                    ).toLocaleString());
                  var l = document.createElement("p");
                  (l.className = Vn.a.mayChange),
                    (l.innerText = "*UPDATE SCHEDULES MAY SUBJECT TO CHANGE"),
                    r.appendChild(o),
                    r.appendChild(s),
                    r.appendChild(l),
                    a.appendChild(r);
                }
            }
            var c = document.createElement("div");
            if (
              ((c.className = Vn.a.nextChapterContainer),
              (n.style.margin =
                this.mode === Ce.vertical ? "0 auto 10vh auto" : "auto auto"),
              e.chapterType === f.Page.ChapterType.NOSEQUENCE ||
                e.chapterType === f.Page.ChapterType.SEQUENCE)
            ) {
              var u = document.createElement("p");
              if (
                ((u.className = Vn.a.nextChapterBtn),
                (u.innerHTML =
                  this.$t("TO_CHAPTER") + " " + e.nextChapter.name),
                c.appendChild(u),
                e.chapterType === f.Page.ChapterType.NOSEQUENCE)
              ) {
                var d = document.createElement("div");
                d.className = Vn.a.cautionContainer;
                var p = document.createElement("img");
                (p.src = Jn.a), (p.className = Vn.a.cautionImage);
                var m = document.createElement("p");
                (m.className = Vn.a.announce),
                  (m.innerText = String(this.$t("LATER_VOLUME_AHEAD"))),
                  d.appendChild(p),
                  d.appendChild(m),
                  c.appendChild(d);
              }
            }
            var h = document.createElement("p");
            h.classList.add(Vn.a.subscribeBtn),
              h.classList.add(Vn.a.btn),
              e.isSubscribed
                ? h.classList.add(Vn.a.done)
                : h.classList.add(Vn.a.default),
              (h.innerHTML = e.isSubscribed
                ? String(this.$t("doneFAVORITED"))
                : String(this.$t("addFAVORITED")));
            var g = document.createElement("p");
            g.classList.add(Vn.a.btn),
              g.classList.add(Vn.a.commentsBtn),
              (g.innerText = String(this.$t("COMMENTS")));
            var b = document.createElement("a"),
              y = aa();
            b.classList.add(Vn.a.appBannerWrapper),
              (b.href = (function () {
                switch (y) {
                  case "iPod":
                  case "iPad":
                  case "iPhone":
                    return "https://itunes.apple.com/app/id1442476536";
                  case "Android":
                  case "Other":
                    return "https://play.google.com/store/apps/details?id=jp.co.shueisha.mangaplus";
                }
              })());
            var w = document.createElement("img");
            return (
              w.classList.add(Vn.a.appBanner),
              (w.src =
                "en" === this.$store.state.language.serviceStatus
                  ? Ln.a
                  : Dn.a),
              (w.alt = ""),
              b.appendChild(w),
              n.appendChild(a),
              n.appendChild(c),
              n.appendChild(g),
              n.appendChild(h),
              n.appendChild(b),
              t.appendChild(n),
              t.outerHTML
            );
          }),
          (t.prototype.createBannerPage = function (e) {
            var t = document
              .querySelector("#banner-page")
              .querySelector(".wrapper");
            while (t.firstChild) t.removeChild(t.firstChild);
            return (
              e.banners.map(function (e) {
                var n = document.createElement("a");
                (n.href = e.action.url), (n.className = Vn.a.banner);
                var a = document.createElement("img");
                (a.src = e.imageUrl),
                  (a.className = Vn.a.bannerImg),
                  (a.style.height = "auto"),
                  n.appendChild(a),
                  t.appendChild(n);
              }),
              t.outerHTML
            );
          }),
          (t.prototype.onResetSurface = function () {
            var e;
            null === (e = this.model) ||
              void 0 === e ||
              e.pages
                .filter(function (e) {
                  return e.advertisement;
                })
                .forEach(function (e) {});
          }),
          (t.prototype.onViewerOpened = function () {
            var e = this;
            Object(Wn["a"])(2e3)
              .pipe(
                Object(Yn["a"])(
                  Object(qn["a"])(
                    this.toggleNavigationSubject,
                    this.toggleSideMenuSubjcet
                  )
                )
              )
              .subscribe(function (t) {
                e.isShowingNavigation = !1;
              });
          }),
          (t.prototype.onAfterMovePage = function (e, t, n) {
            t > this.t.pageCount - 2 && (this.isShowingNavigation = !0),
              (this.currentPageNumber = t),
              ((this.model.pages[t + 1] &&
                this.model.pages[t + 1].advertisement) ||
                (this.model.pages[t] && this.model.pages[t].advertisement)) &&
                (adsbygoogle = window.adsbygoogle || []).push({});
          }),
          (t.prototype.loadZao = function () {
            var e = this,
              t = this.createViewerPage(this.mode),
              n = document.querySelector(".zao");
            (this.verticalOption.verticalPageMargin = this.model.isVerticalOnly
              ? 0
              : 30),
              (this.t = new Sn.a.Viewer(
                n,
                t,
                this.mode === Ce.horizontal
                  ? this.horizontalOption
                  : this.verticalOption
              )),
              this.slider ||
                this.mode !== Ce.horizontal ||
                (this.slider = new Sn.a.Slider(
                  document.querySelector(".slider"),
                  this.t
                )),
              this.t.on("tap_center", this.tapOrClickCenter),
              this.t.on("reset_surface", this.onResetSurface),
              this.t.on("click_center", this.tapOrClickCenter),
              this.t.on("viewer_opened", this.onViewerOpened),
              this.t.on("after_move_page", this.onAfterMovePage),
              (this.numberOfPages = this.t.pageCount),
              this.t.open().then(function () {
                e.$forceUpdate();
              });
          }),
          (t.prototype.tapOrClickCenter = function () {
            this.t.currentPageNumber > this.t.pageCount - 2 ||
              this.toggleNavigation();
          }),
          (t.loadMode = function () {
            var e,
              t = localStorage.getItem("viewerMode");
            switch ((null == t && (t = "vertical"), t)) {
              case "horizontal":
                e = Ce.horizontal;
                break;
              case "vertical":
                e = Ce.vertical;
            }
            return e;
          }),
          (t.prototype.toggleNavigation = function () {
            this.isShowingNavigation = !this.isShowingNavigation;
          }),
          Object.defineProperty(t.prototype, "isShowingSlider", {
            get: function () {
              return this.isShowingNavigation;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.createViewerPage = function (e) {
            var t = this;
            return this.model.pages.map(function (e, n) {
              return e.mangaPage
                ? t.model.startFromRight || 0 !== n
                  ? e.mangaPage.type === f.Page.PageType.RIGHT ||
                    e.mangaPage.type === f.Page.PageType.LEFT
                    ? {
                        src: e.mangaPage.imageUrl,
                        group: 1,
                        encryption_hex: e.mangaPage.encryptionKey,
                      }
                    : {
                        src: e.mangaPage.imageUrl,
                        encryption_hex: e.mangaPage.encryptionKey,
                      }
                  : {
                      src: e.mangaPage.imageUrl,
                      encryption_hex: e.mangaPage.encryptionKey,
                      spread: "single",
                    }
                : e.bannerList
                ? {
                    html: t.createBannerPage(e.bannerList),
                    spread: "auto",
                    width: 300,
                  }
                : e.advertisement
                ? {
                    html:
                      '\n                    <div id="inner-ad" style="height:100%; display:flex; align-items: center;">\n                        <ins class="adsbygoogle" \n                         style="display:inline-block;width:336px;height:280px;margin:auto;" \n                         data-ad-client="ca-pub-4065733730259149" \n                         data-ad-slot="' +
                      e.advertisement.adNetworks[0].adsense.unitID +
                      '"></ins> \n                    </div>',
                    spread: "single",
                    width: 500,
                  }
                : e.lastPage
                ? {
                    html: t.createLastPage(e.lastPage),
                    width: 400,
                    event: [
                      {
                        selector: "." + Vn.a.nextChapterContainer,
                        type: "click",
                        callback: function (n) {
                          t.$router.push(
                            "/viewer/" + e.lastPage.nextChapter.chapterId
                          );
                        },
                      },
                      {
                        selector: "." + Vn.a.subscribeBtn,
                        type: "click",
                        callback: t.onClickSubscribeBtn,
                      },
                      {
                        selector: "." + Vn.a.commentsBtn,
                        type: "click",
                        callback: function (e) {
                          t.$router.push("/comments/" + t.model.chapterId);
                        },
                      },
                    ],
                  }
                : void 0;
            });
          }),
          (t.prototype.onClickSubscribeBtn = function (e) {
            var t = this,
              n = this.model.pages.slice(-1)[0].lastPage;
            n.isSubscribed
              ? S.instance()
                  .unSubscribeTitle(this.model.titleId)
                  .then(function (e) {
                    var a = document.querySelector("." + Vn.a.subscribeBtn);
                    a.classList.remove(Vn.a.done),
                      a.classList.add(Vn.a.default),
                      (a.innerHTML = String(t.$t("addFAVORITED"))),
                      (t.model.pages[
                        t.model.pages.length - 1
                      ].lastPage = Object(i["a"])(Object(i["a"])({}, n), {
                        isSubscribed: !1,
                      }));
                  })
              : S.instance()
                  .subscribeTitle(this.model.titleId)
                  .then(function (e) {
                    var a = document.querySelector("." + Vn.a.subscribeBtn);
                    a.classList.remove(Vn.a.default),
                      a.classList.add(Vn.a.done),
                      (a.innerHTML = String(t.$t("doneFAVORITED"))),
                      (t.model.pages[
                        t.model.pages.length - 1
                      ].lastPage = Object(i["a"])(Object(i["a"])({}, n), {
                        isSubscribed: !0,
                      }));
                  });
          }),
          (t.prototype.onChangeMode = function (e) {
            this.t.toggleDirection(),
              (this.mode = e),
              (this.verticalOption.verticalPageMargin = this.model
                .isVerticalOnly
                ? 0
                : 30),
              this.t.setOptions(
                this.t.direction === Ce.horizontal
                  ? this.horizontalOption
                  : this.verticalOption
              );
            var t = this.createViewerPage(this.mode);
            this.t.setPageData(t),
              this.t.resetSurface(),
              this.slider ||
                this.mode !== Ce.horizontal ||
                (this.slider = new Sn.a.Slider(
                  document.querySelector(".slider"),
                  this.t
                )),
              localStorage.setItem("viewerMode", e);
            var n = document.querySelector("." + Vn.a.toast);
            (n.className = ""),
              n.classList.add(
                this.mode === Ce.horizontal
                  ? Vn.a.toastHorizontal
                  : Vn.a.toastVertical
              ),
              n.classList.add(Vn.a.toast);
          }),
          (t.prototype.onChangeQuarity = function (e) {
            var t = this;
            (this.quarity = e),
              localStorage.setItem("quarity", e),
              S.instance()
                .fetchViewerData(parseInt(this.id), e)
                .then(function (e) {
                  if (e.data.error) {
                    var n = "en" === t.$store.state.language.serviceStatus,
                      a = n
                        ? e.data.error.englishPopup
                        : e.data.error.spanishPopup;
                    alert(a.body);
                  } else {
                    t.model = e.data.success.mangaViewer;
                    var i = t.createViewerPage(t.mode);
                    t.t.setPageData(i), t.t.resetSurface();
                  }
                })
                .catch(function (e) {
                  X(t.$router, e);
                });
          }),
          (t.prototype.render = function (e) {
            var t,
              n = this;
            return e("div", [
              e(na),
              e("div", { class: Vn.a.wrapper }, [
                e("div", { class: Vn.a.viewerContainer + " zao" }),
                e(
                  "div",
                  {
                    class:
                      Vn.a.footer +
                      " " +
                      (this.isShowingSlider ? Vn.a.appear : Vn.a.hidden),
                  },
                  [
                    e(
                      "div",
                      { class: this.mode === Ce.vertical ? Vn.a.hidden : "" },
                      [e("div", { class: "slider " + Vn.a.slider + " " })]
                    ),
                    e("div", { class: Vn.a.container }, [
                      this.model &&
                        e(
                          "router-link",
                          {
                            attrs: {
                              to:
                                "/comments/" +
                                (null === (t = this.model) || void 0 === t
                                  ? void 0
                                  : t.chapterId),
                            },
                          },
                          [
                            e("img", {
                              attrs: { src: at.a },
                              class: Vn.a.commentIcon,
                            }),
                          ]
                        ),
                      e("p", { class: Vn.a.pageNumber }, [
                        this.currentPageNumber,
                        " / ",
                        this.numberOfPages,
                      ]),
                    ]),
                  ]
                ),
                this.model &&
                  e("div", [
                    e(Un, {
                      attrs: {
                        title: this.model.titleName,
                        chapterTitle: this.model.chapterName,
                        isShowingNavigation: this.isShowingNavigation,
                        titleId: this.model.titleId,
                      },
                      on: {
                        toggleModal: function () {
                          n.toggleNavigationSubject.next(),
                            (n.isShowingModal = !n.isShowingModal);
                        },
                        toggleSideMenu: function () {
                          n.toggleSideMenuSubjcet.next(),
                            (n.isShowingSideMenu = !n.isShowingSideMenu);
                        },
                      },
                    }),
                    e(
                      "div",
                      {
                        class:
                          (this.mode === Ce.horizontal
                            ? Vn.a.toastHorizontal
                            : Vn.a.toastVertical) +
                          " " +
                          Vn.a.toast,
                      },
                      [
                        e("img", {
                          attrs: {
                            src: this.mode === Ce.horizontal ? In.a : Pn.a,
                            alt: "",
                          },
                          class: Vn.a.modeIcon,
                        }),
                      ]
                    ),
                    e(Gn, {
                      attrs: {
                        sns: this.model.sns,
                        mode: this.mode,
                        chapterId: this.model.chapterId,
                        canChangeMode: !this.model.isVerticalOnly,
                        isShowingModal: this.isShowingModal,
                        quarity: this.quarity,
                      },
                      on: {
                        click: function () {
                          return (n.isShowingModal = !1);
                        },
                        toggleMode: function () {
                          n.toggleNavigationSubject.next(),
                            n.onChangeMode(
                              "horizontal" === n.mode
                                ? Ce.vertical
                                : Ce.horizontal
                            ),
                            (n.isShowingModal = !n.isShowingModal);
                        },
                        toggleQuarity: function (e) {
                          n.onChangeQuarity(e),
                            (n.isShowingModal = !n.isShowingModal);
                        },
                      },
                    }),
                    e(Xn, {
                      attrs: {
                        chapters: this.model.chapters,
                        isShowingSideMenu: this.isShowingSideMenu,
                      },
                    }),
                  ]),
                e("template", { attrs: { id: "banner-page" } }, [
                  e("div", { class: "wrapper " + Vn.a.bannerContainer }),
                ]),
                e("template", { attrs: { id: "last-page" } }, [
                  e("div", {
                    class: "wrapper",
                    style: {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    },
                  }),
                ]),
              ]),
            ]);
          }),
          (t = n = Object(i["c"])(
            [
              Object(L["b"])({
                components: { Modal: Gn, SideMenu: Xn, Navigation: Un },
                metaInfo: function () {
                  var e, t;
                  if (!this.model) return null;
                  var n = this.model
                    ? "[" +
                      (null === (e = this.model) || void 0 === e
                        ? void 0
                        : e.chapterName) +
                      "] " +
                      (null === (t = this.model) || void 0 === t
                        ? void 0
                        : t.titleName)
                    : "MANGA Plus by SHUEISHA";
                  return {
                    title: n,
                    titleTemplate: "%s | MANGA Plus",
                    meta: [{ name: "robots", content: "noindex" }],
                  };
                },
              }),
            ],
            t
          )),
          t
        );
      })(r["c"]),
      ra = ia,
      oa = n("8e4e"),
      sa = n.n(oa),
      la = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            return e("div", { class: sa.a.container }, [
              e("img", { attrs: { src: n("16f4"), alt: "" }, class: sa.a.img }),
            ]);
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      ca = la,
      ua = n("d775"),
      da = n.n(ua),
      pa = n("2c12"),
      ma = n.n(pa),
      ha = n("c8e1"),
      ga = n.n(ha),
      fa = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e("div", { class: ma.a.commentItem }, [
              e("img", {
                attrs: { src: this.comment.iconUrl, alt: "" },
                class: ma.a.icon,
              }),
              e("p", { class: ma.a.userName }, [this.comment.userName]),
              e("p", { class: ma.a.body }, [this.comment.body]),
              e("div", { class: ma.a.wrapper }, [
                e("p", { class: ma.a.date }, [
                  new Date(
                    1e3 * this.comment.created
                  ).toLocaleString(navigator.language, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }),
                ]),
                e("p", { class: ma.a.like }, [
                  e("img", {
                    attrs: { src: ga.a, alt: "" },
                    class: ma.a.likeIcon,
                  }),
                  e("span", { class: ma.a.numberOfLikes }, [
                    this.comment.numberOfLikes.toLocaleString(),
                  ]),
                ]),
              ]),
              e(
                "p",
                {
                  class: ma.a.likeBtn,
                  style: {
                    color: this.comment.alreadyLiked
                      ? "rgb(255,214,0)"
                      : "#ffffff",
                    opacity: this.comment.alreadyLiked ? 1 : 0.6,
                  },
                  on: {
                    click: function () {
                      t.$emit("click", t.comment.id);
                    },
                  },
                },
                [
                  e("img", {
                    attrs: { src: ga.a, alt: "" },
                    class: ma.a.likeIcon,
                  }),
                  e("p", { class: ma.a.likeText }, [this.$t("LIKE")]),
                ]
              ),
            ]);
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "comment", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      ba = fa,
      ya = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.created = function () {
            var e = this;
            (this.id = this.$route.params["id"]),
              this.$store.state.comments.model[this.id] ||
                this.$store
                  .dispatch("comments/fetchData", this.id)
                  .catch(function (t) {
                    X(e.$router, t);
                  });
          }),
          (t.prototype.render = function (e) {
            var t = this;
            return e("div", { class: da.a.commentsContainer }, [
              (function () {
                if (t.$store.state.comments.model[t.id])
                  return e("div", [
                    e(K, { class: da.a.title }, [t.$t("COMMENTS")]),
                    e("div", { class: da.a.commentsHeader }, [
                      e(
                        "a",
                        {
                          attrs: {
                            href: (function () {
                              return "iPhone" === navigator.platform ||
                                "iPod" === navigator.platform ||
                                "iPad" === navigator.platform
                                ? "https://itunes.apple.com/app/id1442476536"
                                : "https://play.google.com/store/apps/details?id=jp.co.shueisha.mangaplus";
                            })(),
                          },
                        },
                        [
                          e("p", { class: da.a.leaveBtn }, [
                            t.$t("INSTALL_APP"),
                          ]),
                        ]
                      ),
                    ]),
                    e("div", { class: da.a.comments }, [
                      t.$store.state.comments.model[t.id].comments.map(
                        function (n) {
                          var a = { attrs: { comment: n } };
                          return e(
                            ba,
                            Ht()([
                              {},
                              a,
                              {
                                on: {
                                  click: function (e) {
                                    n.alreadyLiked
                                      ? t.$store.dispatch("comments/unlike", {
                                          chapterId: t.id,
                                          commentId: e,
                                        })
                                      : t.$store.dispatch("comments/like", {
                                          chapterId: t.id,
                                          commentId: e,
                                        });
                                  },
                                },
                              },
                            ])
                          );
                        }
                      ),
                    ]),
                  ]);
              })(),
            ]);
          }),
          (t = Object(i["c"])(
            [Object(L["b"])({ components: { CommentItem: ba } })],
            t
          )),
          t
        );
      })(r["c"]),
      wa = ya,
      va = {
        en: {
          UPDATES: "Updates",
          FEATURED: "Featured",
          MANGALIST: "Manga List",
          FAVORITED: "Favorited",
          language: "English",
          New: "UP",
          ALL: "All",
          HOTTEST: "Hottest",
          addFAVORITED: "Favorite",
          doneFAVORITED: "Favorited",
          REMOVE: "Remove",
          UNDO: "Undo",
          REMOVED: "Title removed",
          RECOMMEND: "YOU MAY ALSO LIKE",
          UPDATE_SCHEDULE: "UPDATE SCHEDULE",
          OVERVIEW: "OVERVIEW",
          SHARE: "Share",
          TWEET: "Tweet",
          ABOUT_US: "About Us",
          NEWS_AND_EVENTS: "News and Events",
          HELP_FAQS: "Help / FAQs",
          FEEDBACK: "Feedback",
          TERMS_OF_SERVICES: "Terms of Services",
          SERVICE_ANNOUNCEMENT: "Service Announcements",
          PRIVACY_POLICY: "Privacy Policy",
          COPYRIGHTS: "Copyrights",
          VIEW_ALL: "View All",
          READING_DIRECTION: "Reading Direction",
          COMMENTS: "Comments",
          TO_CHAPTER: "To Chapter",
          LATER_VOLUME_AHEAD: "LATER VOLUMES AHEAD! BE AWARE OF SPOILERS.",
          CHANGE_LANGUAGE: "CHANGE LANGUAGE: ",
          SERVICE_LANGUAGE: "Service Language",
          CONTENTS_LANGUAGE: "Contents Language",
          READ_LATEST: "READ LATEST",
          NEW_CHAPTER_ARRIVES: "New chapter arrives",
          EVERY: "every",
          EVERY_DAY: "every day",
          NEW_CHAPTER_ARRIVES_ON: "New chapter arrives on",
          YOU_MAY_ALSO_LIKE: "YOU MAY ALSO LIKE",
          CHAPTERS_NOT_AVAILABLE:
            "Chapters between are not viewable in this service right now.",
          DOWNLOAD_APP: "Download the app and read it anytime!",
          INSTALL_APP: "Install the app now and leave a comment behind!",
          ABJ:
            "ABJ Mark is a registered trademark (Registration No.10921042) indicating that this e-book store / e-book distribution service is an authorized distribution service that gained permission to use content from the copyright holder. For more information check ",
          FOLLOW_US: "Follow Us!",
          VIEW_COMMENTS: "View posted comments",
          LIKE: "Like",
          LANG: "eng",
          SEARCH: "Search by title or author",
          NO_RESULT:
            "Sorry, no results were found. Try searching for something else.",
          LATEST_NEWS_FROM: "Latest news from",
          CHECK_NOW: "CHECK NOW",
          SEE_ALL_NEWS: "See all news",
          PAGE_RESOLUTION: "Page resolution",
          HIGH: "High",
          MEDIUM: "Medium",
          LOW: "Low",
        },
        es: {
          UPDATES: "Reciente",
          FEATURED: "Destacados",
          MANGALIST: "Descubrir",
          FAVORITED: "Favoritos",
          language: "Español",
          New: "Nuevo",
          ALL: "Todo",
          HOTTEST: "Lo Más Visto",
          addFAVORITED: "Enviar a Favoritos",
          doneFAVORITED: "Enviado a Favoritos",
          REMOVE: "Retirar",
          UNDO: "Deshacer",
          REMOVED: "Título retirado",
          RECOMMEND: "También Te Puede Interesar",
          UPDATE_SCHEDULE: "Programa De Actualización",
          OVERVIEW: "Argumento",
          ABOUT_US: "Sobre nosotros",
          NEWS_AND_EVENTS: "Noticias y Eventos",
          SHARE: "Compartir",
          TWEET: "Tweet",
          HELP_FAQS: "Asistencia",
          FEEDBACK: "Comentario",
          TERMS_OF_SERVICES: "Términos de uso",
          PRIVACY_POLICY: "Política de privacidad",
          COPYRIGHTS: "Derechos de autor",
          VIEW_ALL: "Ver Todo",
          READING_DIRECTION: "Dirección de lectura",
          COMMENTS: "Comentarios",
          TO_CHAPTER: "Al Capítulo",
          LATER_VOLUME_AHEAD:
            "¡VIENEN MÁS CAPÍTULOS! CUIDADO CON LOS DESTRIPES.",
          SERVICE_ANNOUNCEMENT: "Anuncios sobre el servicio",
          CHANGE_LANGUAGE: "CAMBIAR IDIOMA: ",
          SERVICE_LANGUAGE: "Idioma del servicio",
          CONTENTS_LANGUAGE: "Idioma del contenido",
          READ_LATEST: "Leer el último capítulo",
          NEW_CHAPTER_ARRIVES: "El próximo capítulo llega",
          EVERY: "todos los",
          EVERY_DAY: "todos los días",
          NEW_CHAPTER_ARRIVES_ON: "El próximo capítulo llega el",
          YOU_MAY_ALSO_LIKE: "TAMBIÉN LE PUEDE INTERESAR",
          CHAPTERS_NOT_AVAILABLE:
            "Actualmente los capítulos entre no estan disponibles en este servicio.",
          DOWNLOAD_APP: "¡Descarga la app ahora!",
          INSTALL_APP: "Install the app now and leave a comment behind!",
          ABJ:
            "ABJ Mark is a registered trademark (Registration No.10921042) indicating that this e-book store / e-book distribution service is an authorized distribution service that gained permission to use content from the copyright holder. For more information check ",
          FOLLOW_US: "Síguenos en!",
          VIEW_COMMENTS: "Ver comentarios",
          LIKE: "Me gusta",
          LANG: "esp",
          SEARCH: "Buscar por serie o autor",
          NO_RESULT: "Lo sentimos, no se encontraron resultados.",
          LATEST_NEWS_FROM: "Últimas noticias de",
          CHECK_NOW: "VER AQUÍ",
          SEE_ALL_NEWS: "Ver todas las Noticias",
          PAGE_RESOLUTION: "Resolución de página",
          HIGH: "Alto",
          MEDIUM: "Medio",
          LOW: "Bajo",
        },
      },
      Aa = n("2f62"),
      ka = n("842b"),
      _a = n.n(ka),
      Oa = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e("div", [
            e("img", {
              attrs: { src: n("be59"), alt: "logo" },
              class: _a.a.logo + " " + t.data.attrs.class,
            }),
          ]);
        },
      }),
      Sa =
        (n("18a5"),
        (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(i["d"])(t, e),
            (t.prototype.render = function (e) {
              return e("router-link", { attrs: { to: this.$attrs.to } }, [
                this.$slots.default,
              ]);
            }),
            (t = Object(i["c"])([L["b"]], t)),
            t
          );
        })(r["c"])),
      Ta = Sa,
      Pa = n("ad6e"),
      Ca = n.n(Pa),
      Ia = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            return e(Ea, { attrs: Object(Ne["a"])({}, this.$attrs) });
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Ea = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this.$attrs.to.includes("static")
              ? "https://mangaplus.shueisha.co.jp" +
                this.$attrs.to +
                "/" +
                this.$t("LANG")
              : this.$attrs.to;
            return this.$attrs.to.includes("static")
              ? e("a", { attrs: { href: t }, class: Ca.a.anchor }, [
                  e("p", [this.$t(this.$attrs.name)]),
                ])
              : e(Ta, { attrs: { to: t }, class: Ca.a.anchor }, [
                  e("p", [this.$t(this.$attrs.name)]),
                ]);
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      La = function (e, t) {
        return r["c"].extend({
          functional: !0,
          render: function (n, a) {
            return n(
              Ia,
              Ht()([
                { class: a.data.class, attrs: { to: e, name: t } },
                { style: a.data.style },
              ])
            );
          },
        });
      },
      Na = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            return e(
              "a",
              {
                attrs: {
                  href: "https://www.shonenjump.com/mangaplus/whatismangaplus/",
                },
                class: Ca.a.anchor,
              },
              [this.$t("ABOUT_US")]
            );
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Da = La("/updates", "UPDATES"),
      ja = La("/featured", "FEATURED"),
      Va = La("/manga_list", "MANGALIST"),
      xa = La("/favorited", "FAVORITED"),
      Ra = La("/static/faq", "HELP_FAQS"),
      Ma = La("/announcement", "NEWS_AND_EVENTS"),
      Ua = La("/feedback", "FEEDBACK"),
      Ba =
        (La("/search_result", "SEARCH_RESULT"),
        La("/static/terms", "TERMS_OF_SERVICES")),
      Ha = La("/static/privacypolicy", "PRIVACY_POLICY"),
      Fa = La("/static/copyright", "COPYRIGHTS"),
      Ga = n("c72d"),
      Wa = n.n(Ga),
      qa = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            return e("div", { class: Wa.a.navigation }, [
              e(Da, { class: Wa.a.navigationItem }),
              e(ja, { class: Wa.a.navigationItem }),
              e(Va, { class: Wa.a.navigationItem }),
              e(xa, { class: Wa.a.navigationItem }),
              e(Na, { class: Wa.a.navigationItem }),
            ]);
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Ya = qa,
      Qa = n("01aa"),
      za = n.n(Qa),
      Ka = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.inputText = ""), t;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e(
              "form",
              {
                class: za.a.searchContainer,
                on: {
                  submit: function (e) {
                    e.stopPropagation(),
                      e.preventDefault(),
                      t.$router.push("/search_result?keyword=" + t.inputText);
                  },
                },
              },
              [
                e(
                  "router-link",
                  {
                    class: za.a.iconWhiteContainer,
                    attrs: {
                      to: {
                        path: "/search_result",
                        query: { keyword: this.inputText },
                      },
                    },
                  },
                  [
                    e("img", {
                      class: za.a.iconWhite,
                      attrs: { src: n("6e75d") },
                    }),
                  ]
                ),
                e("div", { class: za.a.input }, [
                  e(
                    "router-link",
                    {
                      class: za.a.iconGrey,
                      attrs: {
                        to: {
                          path: "/search_result",
                          query: { keyword: this.inputText },
                        },
                      },
                    },
                    [
                      e("img", {
                        attrs: { src: n("77b0"), type: "button" },
                        class: za.a.iconGrey,
                      }),
                    ]
                  ),
                  e("input", {
                    class: za.a.searchForm,
                    attrs: { type: "text", placeholder: this.$t("SEARCH") },
                    on: {
                      input: function (e) {
                        var n = e.target;
                        n.value && (t.inputText = n.value);
                      },
                    },
                  }),
                ]),
              ]
            );
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Xa = Ka,
      $a = n("4a6a"),
      Ja = n.n($a),
      Za = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t;
            switch (this.element) {
              case "p":
                t = e("p", { class: Ja.a[this.s] }, [this.$slots.default]);
                break;
              case "h1":
                t = e("h1", { class: Ja.a[this.s] }, [this.$slots.default]);
                break;
              case "h2":
                t = e("h2", { class: Ja.a[this.s] }, [this.$slots.default]);
                break;
              case "h3":
                t = e("h3", { class: Ja.a[this.s] }, [this.$slots.default]);
                break;
              case "h4":
                t = e("h4", { class: Ja.a[this.s] }, [this.$slots.default]);
                break;
              case "h5":
                t = e("h5", { class: Ja.a[this.s] }, [this.$slots.default]);
                break;
              case "h6":
                t = e("h6", { class: Ja.a[this.s] }, [this.$slots.default]);
                break;
            }
            return t;
          }),
          Object(i["c"])(
            [Object(r["b"])({ default: "m" })],
            t.prototype,
            "s",
            void 0
          ),
          Object(i["c"])(
            [Object(r["b"])({ default: "p" })],
            t.prototype,
            "element",
            void 0
          ),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      ei = Za,
      ti = n("1fc0"),
      ni = n.n(ti),
      ai = n("dd7f"),
      ii = n.n(ai),
      ri = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e(
            "div",
            Ht()([{ class: ii.a.triangle }, { style: t.data.style }])
          );
        },
      }),
      oi = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e(
              "div",
              {
                class: ni.a.languageSettingBtn,
                on: {
                  click: function () {
                    t.$emit("click");
                  },
                },
              },
              [
                e(
                  ei,
                  {
                    attrs: Object(Ne["a"])(
                      {},
                      { _size: "s", class: ni.a.text }
                    ),
                  },
                  [this.$t("CHANGE_LANGUAGE"), this.$t("language")]
                ),
                e(ri),
              ]
            );
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      si = oi,
      li = n("3df2"),
      ci = n.n(li),
      ui = n("753f"),
      di = n.n(ui),
      pi = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e("img", {
              attrs: { src: n("99de") },
              on: {
                click: function () {
                  t.$emit("click");
                },
              },
              class: di.a.hamburger,
            });
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      mi = pi,
      hi = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e("div", [
            e("div", { class: ci.a.header }, [
              e(Ta, { attrs: Object(Ne["a"])({}, { to: "/updates" }) }, [
                e(Oa, { attrs: Object(Ne["a"])({}, { class: ci.a.logo }) }),
              ]),
              e(Ya, { class: ci.a.navigation }),
              (function () {
                return "/search_result" !== t.data.attrs.path
                  ? e(Xa, { class: ci.a.searchForm })
                  : e(Xa, { class: ci.a.invisibleSearchForm });
              })(),
              e(
                "div",
                {
                  class: ci.a.settingBtn,
                  style: {
                    display: t.data.attrs.hideLanguageSettings ? "none" : "",
                  },
                },
                [
                  e(si, {
                    on: { click: t.data.on.toggleShowingSettings },
                    attrs: { hidden: t.data.attrs.hideLanguageSettings },
                  }),
                ]
              ),
              e("div", { class: ci.a.hamburger }, [
                e(mi, {
                  on: { click: t.data.on.toggleShowingSettings },
                  class: ci.a.hamburger,
                }),
              ]),
            ]),
          ]);
        },
      }),
      gi = (n("25f0"), n("c544")),
      fi = n.n(gi),
      bi = n("63e4"),
      yi = n.n(bi),
      wi = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e("div", [
              e("input", {
                attrs: {
                  type: "radio",
                  name: this.$attrs.name,
                  id: this.$attrs.domId,
                  disabled: !1,
                },
                class: yi.a.input,
                domProps: { checked: this.$attrs.checked },
                on: {
                  change: function (e) {
                    console.log("onchange"), t.$emit("change", e);
                  },
                },
              }),
              e("label", {
                attrs: { for: this.$attrs.domId },
                class: yi.a.radio,
              }),
            ]);
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      vi = wi,
      Ai = n("a7ed"),
      ki = n.n(Ai),
      _i = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e("div", { class: ki.a.wrapper }, [
              e("input", {
                attrs: {
                  type: "checkbox",
                  disabled: this.$attrs.disabled,
                  name: this.$attrs.name,
                  id: this.$attrs.domId,
                },
                class: ki.a.input,
                domProps: { checked: this.$attrs.checked },
                on: {
                  change: function (e) {
                    t.$emit("change", e.target);
                  },
                },
              }),
              e("label", {
                attrs: { for: this.$attrs.domId },
                class: ki.a.checkbox,
              }),
            ]);
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Oi = _i,
      Si = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            this.$slots.input[0];
            return e("div", { class: fi.a.wrapper }, [
              (function () {
                var e = Object.assign({}, t.$slots.input[0]),
                  n = Object.assign({}, t.$attrs);
                return (
                  (e.data.attrs = n),
                  (e.data.attrs.domId = t.$attrs.name + "-" + t.$attrs.domId),
                  (e.data.on = {
                    change: function (e) {
                      t.$emit("change", e);
                    },
                  }),
                  e
                );
              })(),
              e(
                "label",
                {
                  attrs: { for: this.$attrs.name + "-" + this.$attrs.domId },
                  class:
                    fi.a.label +
                    " " +
                    (this.$attrs.disabled ? fi.a.disabled : ""),
                },
                [e("txt", { attrs: { s: "l" } }, [this.$slots.label])]
              ),
            ]);
          }),
          (t = Object(i["c"])(
            [Object(L["b"])({ components: { txt: ei } })],
            t
          )),
          t
        );
      })(r["c"]),
      Ti = r["c"].extend({
        functional: !0,
        name: "service-language-item",
        render: function (e, t) {
          return e(
            Si,
            {
              attrs: {
                name: t.data.attrs.name,
                domId: t.data.attrs.id,
                checked: t.data.attrs.checked,
                disabled: t.data.attrs.disabled,
              },
              on: { change: t.data.on.change },
              class: t.data.class,
            },
            [
              e("template", { slot: "input" }, [
                e(vi, { attrs: { disabled: t.data.attrs.disabled } }),
              ]),
              e("template", { slot: "label" }, [t.slots().default]),
            ]
          );
        },
      }),
      Pi = r["c"].extend({
        functional: !0,
        name: "contents-language-item",
        render: function (e, t) {
          return e(
            Si,
            {
              attrs: {
                name: "contents",
                domId: t.data.attrs.id,
                checked: t.data.attrs.checked,
                disabled: t.data.attrs.disabled,
              },
              on: { change: t.data.on.change },
            },
            [
              e("template", { slot: "input" }, [e(Oi)]),
              e(
                "template",
                {
                  slot: "label",
                  class: t.data.attrs.disabled ? fi.a.disabled : "",
                },
                [t.slots().default]
              ),
            ]
          );
        },
      }),
      Ci = n("8ce6"),
      Ii = n.n(Ci),
      Ei = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e("div", [
            e(
              ei,
              {
                attrs: Object(Ne["a"])(
                  {},
                  { element: "h3", _size: "l", class: Ii.a.text }
                ),
              },
              [t.slots().default[0].children]
            ),
            e("div", { class: Ii.a.items }, [
              (function () {
                return t.slots().default[1].children.map(function (e) {
                  return (e.data.class = Ii.a.item), e;
                });
              })(),
            ]),
          ]);
        },
      }),
      Li = r["c"].extend({
        functional: !0,
        name: "service-language",
        render: function (e, t) {
          var n = Math.random().toString(30).slice(-8);
          return e(Ei, [
            e("template", { slot: "title" }, [t.data.attrs.headerName]),
            e("template", { slot: "items" }, [
              e(
                Ti,
                {
                  attrs: {
                    name: n,
                    id: "en",
                    checked: "en" === t.data.attrs.status,
                  },
                  on: { change: t.data.on.change },
                },
                ["ENGLISH"]
              ),
              e(
                Ti,
                {
                  attrs: {
                    name: n,
                    id: "es",
                    checked: "es" === t.data.attrs.status,
                    disabled: !1,
                  },
                  on: { change: t.data.on.change },
                },
                ["ESPAÑOL"]
              ),
            ]),
          ]);
        },
      }),
      Ni = r["c"].extend({
        functional: !0,
        name: "contents-language",
        render: function (e, t) {
          return e(Ei, [
            e("template", { slot: "title" }, [
              t.data.attrs.contentsLanguageHeader,
            ]),
            e("template", { slot: "items" }, [
              e(
                Pi,
                {
                  attrs: {
                    id: "en",
                    checked: t.data.attrs.status.en,
                    disabled: (function () {
                      return (
                        !!t.data.attrs.priority &&
                        "en" === t.data.attrs.priority
                      );
                    })(),
                  },
                  on: { change: t.data.on.change },
                },
                ["ENGLISH"]
              ),
              e(
                Pi,
                {
                  attrs: {
                    id: "es",
                    checked: t.data.attrs.status.es,
                    disabled: (function () {
                      return (
                        !!t.data.attrs.priority &&
                        "es" === t.data.attrs.priority
                      );
                    })(),
                  },
                  on: { change: t.data.on.change },
                },
                ["ESPAÑOL"]
              ),
            ]),
          ]);
        },
      }),
      Di = n("8514"),
      ji = n.n(Di),
      Vi = n("3e97"),
      xi = n.n(Vi),
      Ri = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e("div", {
            class: xi.a.divider + " " + t.data.class,
            style: t.data.style,
          });
        },
      }),
      Mi = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e(
            "div",
            {
              class: ji.a.container + " " + t.data.class,
              on: {
                click: function (e) {
                  e.stopPropagation();
                },
              },
            },
            [
              e(Li, {
                attrs: {
                  status: t.data.attrs.serviceStatus,
                  headerName: t.data.attrs.headerName,
                },
                on: { change: t.data.on.serviceLanguageChange },
              }),
              e(Ri, { class: ji.a.divider }),
              e(Ni, {
                attrs: {
                  status: t.data.attrs.contentsStatus,
                  contentsLanguageHeader: t.data.attrs.contentsLanguageHeader,
                  priority: t.data.attrs.serviceStatus,
                },
                on: { change: t.data.on.contentsLanguageChange },
              }),
            ]
          );
        },
      }),
      Ui = n("8c4f"),
      Bi = n.n(Ui),
      Hi = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e("div", { class: Bi.a.wrapper + " " + t.data.class }, [
            e(Da, { class: Bi.a.item + " " + Bi.a.main }),
            e(ja, { class: Bi.a.item + " " + Bi.a.main }),
            e(Va, { class: Bi.a.item + " " + Bi.a.main }),
            e(xa, { class: Bi.a.main + " " + Bi.a.item }),
            e(Na, { class: Bi.a.main + " " + Bi.a.item }),
            e(Ri, { class: Bi.a.divider }),
            e(ei, { attrs: { s: "m" }, class: Bi.a.languageSetting }, [
              t.data.attrs.userSettingsHeaderName,
            ]),
            e("div", { class: Bi.a.languageSettingContainer }, [
              e(Li, {
                attrs: Object(Ne["a"])(
                  {},
                  { status: t.data.attrs.serviceStatus }
                ),
                on: Object(Ne["a"])(
                  {},
                  { change: t.data.on.serviceLanguageChange }
                ),
              }),
            ]),
            e(ei, { attrs: { s: "m" }, class: Bi.a.languageSetting }, [
              t.data.attrs.contentsLanguageHeader,
            ]),
            e("div", { class: Bi.a.languageSettingContainer }, [
              e(Ni, {
                attrs: {
                  status: t.data.attrs.contentsStatus,
                  priority: t.data.attrs.serviceStatus,
                },
                on: { change: t.data.on.contentsLanguageChange },
              }),
            ]),
            e(Ri, { class: Bi.a.item }),
            e(Ma, { class: Bi.a.item }),
            e(Ra, { class: Bi.a.item }),
            e(Ua, { class: Bi.a.item }),
            e(Ba, { class: Bi.a.item }),
            e(Ha, { class: Bi.a.item }),
            e(Fa, { class: Bi.a.item }),
          ]);
        },
      }),
      Fi = n("4f3c"),
      Gi = n.n(Fi),
      Wi = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e("div", [
            e(hi, {
              attrs: {
                path: t.data.attrs.path,
                isShowingSettings: t.data.attrs.isShowingSettings,
                hideLanguageSettings: t.data.attrs.hideLanguageSettings,
              },
              on: { toggleShowingSettings: t.data.on.toggleShowingSettings },
            }),
            (function () {
              if (t.data.attrs.isShowingSettings)
                return e(Mi, {
                  class: Gi.a.setting,
                  attrs: {
                    serviceStatus: t.data.attrs.serviceStatus,
                    contentsStatus: t.data.attrs.contentsStatus,
                    contentsLanguageHeader: t.data.attrs.contentsLanguageHeader,
                    headerName: t.data.attrs.userSettingsHeaderName,
                  },
                  on: {
                    serviceLanguageChange: t.data.on.serviceLanguageChange,
                    contentsLanguageChange: t.data.on.contentsLanguageChange,
                  },
                });
            })(),
            e(
              "div",
              {
                directives: [
                  { name: "show", value: t.data.attrs.isShowingSettings },
                ],
              },
              [
                e(Hi, {
                  attrs: {
                    serviceStatus: t.data.attrs.serviceStatus,
                    contentsStatus: t.data.attrs.contentsStatus,
                    contentsLanguageHeader: t.data.attrs.contentsLanguageHeader,
                    userSettingsHeaderName: t.data.attrs.userSettingsHeaderName,
                  },
                  on: {
                    serviceLanguageChange: t.data.on.serviceLanguageChange,
                    contentsLanguageChange: t.data.on.contentsLanguageChange,
                  },
                  class: Gi.a.menu,
                }),
              ]
            ),
          ]);
        },
      }),
      qi = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.created = function () {
            var e = this;
            this.$router.beforeEach(function (t, n, a) {
              e.$store.commit("hideSettingModal"), a();
            });
          }),
          (t.prototype.render = function (e) {
            var t = this;
            return e(Wi, {
              attrs: {
                path: this.$route.path,
                isShowingSettings: this.$store.state.language.isShowSetting,
                serviceStatus: this.$store.state.language.serviceStatus,
                contentsStatus: this.$store.state.language.contentsStatus,
                hideLanguageSettings: this.$route.path.indexOf("titles") > 0,
                userSettingsHeaderName: this.$t("SERVICE_LANGUAGE"),
                contentsLanguageHeader: this.$t("CONTENTS_LANGUAGE"),
              },
              on: {
                toggleShowingSettings: function (e) {
                  return t.$store.commit("toggleSettingModal");
                },
                serviceLanguageChange: function (e) {
                  var n = e.target.id.slice(-2);
                  (t.$i18n.locale = n),
                    t.$store.dispatch("updateServiceLanguage", n);
                },
                contentsLanguageChange: function (e) {
                  var n = e.target.id.slice(-2);
                  t.$store.commit("setContentsStatus", n);
                },
              },
            });
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Yi = qi,
      Qi = n("b5b6"),
      zi = n.n(Qi),
      Ki = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e(
            "div",
            { class: zi.a.container + " " + t.data.class, style: t.data.style },
            [
              e("img", {
                attrs: {
                  src: n("5185"),
                  alt: "app_icon",
                  width: "80",
                  height: "80",
                },
                class: zi.a.appIcon,
              }),
              e("div", { class: zi.a.vertical }, [
                e(ei, { attrs: { s: "m" }, class: zi.a.text }, [
                  t.data.attrs.letsDownloadApp,
                ]),
                e("div", { class: zi.a.horizontal }, [
                  e(
                    "a",
                    {
                      attrs: {
                        href: "https://itunes.apple.com/app/id1442476536",
                      },
                    },
                    [
                      e("img", {
                        attrs: {
                          src: n("34ae"),
                          alt: "AppStoreIcon",
                          width: "120",
                          height: "40",
                        },
                        class: zi.a.appStoreIcon,
                      }),
                    ]
                  ),
                  e(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://play.google.com/store/apps/details?id=jp.co.shueisha.mangaplus",
                      },
                      class: zi.a.playStore,
                    },
                    [
                      e("img", {
                        attrs: {
                          src: n("be22"),
                          alt: "PlayStoreIcon",
                          width: "134",
                          height: "40",
                        },
                        class: zi.a.playStoreIcon,
                      }),
                    ]
                  ),
                ]),
              ]),
            ]
          );
        },
      }),
      Xi = n("d630"),
      $i = n.n(Xi),
      Ji = n("04ef"),
      Zi = n.n(Ji),
      er = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e(
            Ta,
            { attrs: { to: t.data.attrs.to }, class: t.data.class },
            [
              e(ei, { attrs: { s: "s" }, class: Zi.a.text }, [
                t.slots().default,
              ]),
            ]
          );
        },
      }),
      tr = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e("div", { class: $i.a.container }, [
              e("div", { class: $i.a.flexContainer }, [
                e(er, { class: $i.a.item, attrs: { to: "/announcement" } }, [
                  this.$t("NEWS_AND_EVENTS"),
                ]),
                e(
                  "a",
                  {
                    class: $i.a.item,
                    attrs: {
                      href: (function () {
                        return "en" == t.$store.state.language.serviceStatus
                          ? "https://mangaplus.shueisha.co.jp/static/faq/eng/"
                          : "https://mangaplus.shueisha.co.jp/static/faq/esp/";
                      })(),
                    },
                  },
                  [this.$t("HELP_FAQS")]
                ),
                e(er, { class: $i.a.item, attrs: { to: "/feedback" } }, [
                  this.$t("FEEDBACK"),
                ]),
              ]),
              e("div", { class: $i.a.flexContainer }, [
                e(
                  "a",
                  {
                    class: $i.a.item,
                    attrs: {
                      href: (function () {
                        return "en" == t.$store.state.language.serviceStatus
                          ? "https://mangaplus.shueisha.co.jp/static/terms/eng/"
                          : "https://mangaplus.shueisha.co.jp/static/terms/esp/";
                      })(),
                    },
                  },
                  [this.$t("TERMS_OF_SERVICES")]
                ),
                e(
                  "a",
                  {
                    class: $i.a.item,
                    attrs: {
                      href: (function () {
                        return "en" == t.$store.state.language.serviceStatus
                          ? "https://mangaplus.shueisha.co.jp/static/privacypolicy/eng/"
                          : "https://mangaplus.shueisha.co.jp/static/privacypolicy/esp/";
                      })(),
                    },
                  },
                  [this.$t("PRIVACY_POLICY")]
                ),
                e(
                  "a",
                  {
                    class: $i.a.item,
                    attrs: {
                      href: (function () {
                        return "en" == t.$store.state.language.serviceStatus
                          ? "https://mangaplus.shueisha.co.jp/static/copyright/eng/"
                          : "https://mangaplus.shueisha.co.jp/static/copyright/esp/";
                      })(),
                    },
                  },
                  [this.$t("COPYRIGHTS")]
                ),
              ]),
            ]);
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      nr = tr,
      ar = n("720a"),
      ir = n.n(ar),
      rr = n("809d"),
      or = n.n(rr),
      sr = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e("div", { class: or.a.container + " " + t.data.class }, [
            e(ei, { class: or.a.message, attrs: { s: "m" } }, [
              t.data.attrs.followUs,
            ]),
            e(
              "a",
              {
                attrs: {
                  href:
                    "en" === t.data.attrs.language
                      ? "https://www.facebook.com/mangaplus.en/"
                      : "https://www.facebook.com/mangaplus.es/",
                },
              },
              [
                e("img", {
                  attrs: { src: n("a177"), alt: "", width: "40" },
                  class: or.a.icon,
                }),
              ]
            ),
          ]);
        },
      }),
      lr = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e("div", { class: ir.a.container + " " + t.data.class }, [
            e("div", { class: ir.a.toggle }, [
              e(Ki, {
                attrs: {
                  letsDownloadApp: t.data.attrs.letsDownloadApp,
                  abjInformation: t.data.attrs.abjInformation,
                },
                class: ir.a.appInfo,
              }),
              e("div", { class: ir.a.abj }, [
                e("img", {
                  attrs: {
                    src: n("5225"),
                    alt: "ABJLogo",
                    width: "80",
                    height: "75",
                  },
                  class: ir.a.abjLogo,
                }),
                e(ei, { attrs: { s: "s" }, class: ir.a.abjText }, [
                  t.data.attrs.abjInformation,
                  e("a", { attrs: { href: "https://aebs.or.jp/" } }, [
                    "https://aebs.or.jp/",
                  ]),
                  ".",
                ]),
              ]),
            ]),
            e("div", { class: ir.a.vertical }, [
              e("div", { class: ir.a.horizontal }, [
                e(nr, {
                  class: ir.a.footerNavigation,
                  attrs: { language: t.data.attrs.language },
                }),
                e(sr, {
                  class: ir.a.sns,
                  attrs: {
                    language: t.data.attrs.language,
                    followUs: t.data.attrs.followUs,
                  },
                }),
              ]),
              e(ei, { attrs: { s: "s" }, class: ir.a.copyright }, [
                " ",
                "@2019 Shueisha Inc. All rights reserved.",
              ]),
            ]),
          ]);
        },
      }),
      cr = n("7e1c"),
      ur = n.n(cr),
      dr = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e("div", [
            e(na),
            e("div", { class: ur.a.container }, [
              e(Yi),
              e("div", { class: ur.a.mainContainer }, [e("router-view")]),
              e(lr, {
                class: ur.a.footer,
                attrs: {
                  language: t.data.attrs.language,
                  followUs: t.data.attrs.followUs,
                  letsDownloadApp: t.data.attrs.letsDownloadApp,
                  abjInformation: t.data.attrs.abjInformation,
                },
              }),
            ]),
          ]);
        },
      }),
      pr = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            return e(dr, {
              attrs: {
                isMain: this.$route.path.indexOf("static") < 0,
                language: this.$store.state.language.serviceStatus,
                followUs: this.$t("FOLLOW_US"),
                letsDownloadApp: this.$t("DOWNLOAD_APP"),
                abjInformation: this.$t("ABJ"),
              },
            });
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      mr = pr,
      hr = n("bc8e"),
      gr = n.n(hr),
      fr = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e("div", [
            e(K, ["FAQ"]),
            e("div", { class: gr.a.wrapper }, [
              t.slots().default.map(function (t) {
                return e("div", [t]);
              }),
            ]),
          ]);
        },
      }),
      br = n("eb35"),
      yr = n.n(br),
      wr = n("35f6"),
      vr = n.n(wr),
      Ar = n("89c2"),
      kr = n.n(Ar),
      _r = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e("div", [
              e("input", {
                attrs: { type: "checkbox", id: this.id },
                class: kr.a.input,
                on: {
                  change: function (e) {
                    t.$emit("change");
                  },
                },
              }),
              e("label", {
                attrs: { for: this.$attrs._id },
                class: kr.a.arrow,
                style: this.color
                  ? {
                      borderLeft: "1px solid " + this.color,
                      borderBottom: "1px solid " + this.color,
                    }
                  : {},
              }),
            ]);
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "color", void 0),
          Object(i["c"])([Object(r["b"])()], t.prototype, "id", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Or = _r,
      Sr = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.isShowBody = !1), t;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e("div", [
              e(
                "label",
                {
                  attrs: { for: this.id },
                  class:
                    vr.a.titleBox +
                    " " +
                    (this.isShowBody
                      ? this.titleClassWithShown
                      : this.titleClass),
                },
                [
                  this.$slots.title,
                  e(Or, {
                    attrs: {
                      id: this.id,
                      beforeColor: this.beforeColor,
                      color: this.color ? this.color : "",
                    },
                    on: {
                      change: function () {
                        (t.isShowBody = !t.isShowBody), t.$emit("toggle");
                      },
                    },
                    class: vr.a.arrow,
                  }),
                ]
              ),
              e(
                "transition",
                {
                  attrs: {
                    name: "fade",
                    "enter-active-class": vr.a.fadeEnterActive,
                    "leave-active-class": vr.a.fadeLeaveActive,
                  },
                },
                [
                  e(
                    "div",
                    {
                      directives: [{ name: "show", value: this.isShowBody }],
                      class: vr.a.body,
                    },
                    [this.$slots.body]
                  ),
                ]
              ),
            ]);
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "id", void 0),
          Object(i["c"])([Object(r["b"])()], t.prototype, "titleClass", void 0),
          Object(i["c"])(
            [Object(r["b"])()],
            t.prototype,
            "titleClassWithShown",
            void 0
          ),
          Object(i["c"])(
            [Object(r["b"])()],
            t.prototype,
            "beforeColor",
            void 0
          ),
          Object(i["c"])([Object(r["b"])()], t.prototype, "color", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Tr = Sr,
      Pr = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.isShowBody = !1), t;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e(
              Tr,
              {
                attrs: {
                  id: "accordion-",
                  titleClass: yr.a.title,
                  titleClassWithShown: yr.a.title,
                },
                on: {
                  toggle: function () {
                    t.isShowBody = !t.isShowBody;
                  },
                },
              },
              [
                e("template", { slot: "title" }, [
                  e(
                    ei,
                    {
                      attrs: { element: "h3", s: "m" },
                      class:
                        yr.a.titleText +
                        " " +
                        (this.isShowBody
                          ? yr.a.titleChecked
                          : yr.a.titleNoCheck),
                    },
                    [this.title]
                  ),
                ]),
                e("template", { slot: "body" }, [
                  e("div", { class: yr.a.body }, [this.$slots.default]),
                ]),
              ]
            );
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "title", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Cr = Pr,
      Ir = n("35e3"),
      Er = n.n(Ir),
      Lr = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.isShowBody = !1), t;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e(
              Tr,
              {
                on: {
                  toggle: function () {
                    t.isShowBody = !t.isShowBody;
                  },
                },
                attrs: {
                  titleClass: Er.a.title,
                  titleClassWithShown: Er.a.titleWithShown,
                  color: "white",
                },
                class: Er.a.wrapper,
              },
              [
                e("template", { slot: "title" }, [
                  e(
                    ei,
                    {
                      attrs: { element: "h3", s: "l" },
                      class:
                        Er.a.titleText +
                        " " +
                        (this.isShowBody
                          ? Er.a.titleChecked
                          : Er.a.titleNoCheck),
                    },
                    [this.title]
                  ),
                ]),
                e("template", { slot: "body" }, [
                  this.$slots.default.map(function (t, n) {
                    return e("div", [e("div", { class: Er.a.border }), t]);
                  }),
                ]),
              ]
            );
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "title", void 0),
          (t = Object(i["c"])([r["a"]], t)),
          t
        );
      })(r["c"]),
      Nr = Lr,
      Dr = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.lang = "en"), t;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.created = function () {
            this.$route.params.language
              ? (this.lang = this.$route.params.language)
              : (this.lang = this.$i18n.locale);
          }),
          (t.prototype.render = function (e) {
            return e(fr, [
              e(Nr, { attrs: { title: "title1" } }, [
                e(Cr, { attrs: { title: "item-title" } }, [
                  this.$route.params.language
                    ? this.$route.params.language
                    : this.$i18n.locale,
                ]),
              ]),
              e(Nr, { attrs: { title: "title1" } }, [
                e(Cr, { attrs: { title: "item-title" } }, ["body-title1"]),
                e(Cr, { attrs: { title: "item-title" } }, ["body-title2"]),
              ]),
              e(Nr, { attrs: { title: "title3" } }, [
                e(Cr, { attrs: { title: "item-title" } }, ["body-title1"]),
                e(Cr, { attrs: { title: "item-title" } }, ["body-title2"]),
              ]),
            ]);
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      jr = Dr,
      Vr = n("785d"),
      xr = n.n(Vr),
      Rr = n("cd08"),
      Mr = n.n(Rr),
      Ur = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            var t = this;
            return e(
              Tr,
              {
                attrs: {
                  id: "accordion-" + Math.random().toString(30).slice(-8),
                  titleClass: Mr.a.title,
                  titleClassWithShown: Mr.a.title,
                  color: "white",
                },
                on: {
                  toggle: function () {
                    t.isShowBody = !t.isShowBody;
                  },
                },
              },
              [
                e("template", { slot: "title" }, [
                  e("div", { class: Mr.a.contentsWrapper }, [
                    e("div", { class: Mr.a.contents }, [this.title]),
                    e("div", { class: Mr.a.date }, [
                      new Date(
                        1e3 * this.date
                      ).toLocaleString(navigator.language, {
                        weekday: "short",
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      }),
                    ]),
                  ]),
                ]),
                e("template", { slot: "body" }, [
                  e("div", {
                    class: Mr.a.body,
                    domProps: { innerHTML: this.html },
                  }),
                ]),
              ]
            );
          }),
          Object(i["c"])([Object(r["b"])()], t.prototype, "title", void 0),
          Object(i["c"])([Object(r["b"])()], t.prototype, "date", void 0),
          Object(i["c"])([Object(r["b"])()], t.prototype, "html", void 0),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Br = Ur,
      Hr = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e("div", { class: xr.a.wrapper }, [
            e(K, { class: xr.a.title }, [t.data.attrs.titleName]),
            e("div", { class: xr.a.container }, [
              (function () {
                return t.data.attrs.list.map(function (t) {
                  return e("div", [
                    e(Br, {
                      attrs: { title: t.title, date: t.date, html: t.body },
                    }),
                    e("div", { class: xr.a.border }),
                  ]);
                });
              })(),
            ]),
          ]);
        },
      }),
      Fr = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.created = function () {
            0 ===
              this.$store.state.announcements.model.serviceAnnouncements
                .length &&
              (this.language
                ? this.$store.dispatch(
                    "announcements/fetchWebviewData",
                    this.language
                  )
                : this.$store.dispatch("announcements/fetchData"));
          }),
          Object.defineProperty(t.prototype, "language", {
            get: function () {
              return this.$route.params.language;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.render = function (e) {
            return e(Hr, {
              attrs: {
                list: this.$store.state.announcements.model
                  .serviceAnnouncements,
                titleName: this.$t("SERVICE_ANNOUNCEMENT"),
              },
            });
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Gr = Fr,
      Wr = n("5764"),
      qr = n.n(Wr),
      Yr = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e("div", [
            e("div", { class: qr.a.label }, [t.slots().default[0]]),
            t.slots().default[1],
          ]);
        },
      }),
      Qr = n("2f51"),
      zr = n.n(Qr),
      Kr = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e(
            "textarea",
            {
              class: zr.a.textarea + " " + t.data.class,
              attrs: {
                name:
                  "undefined" === t.data.attrs.name
                    ? "textarea"
                    : t.data.attrs.name,
                id:
                  "undefined" === t.data.attrs._id
                    ? Math.random().toString(30).slice(-8)
                    : t.data.attrs._id,
                cols:
                  "undefined" === t.data.attrs.cols ? 30 : t.data.attrs.cols,
                rows:
                  "undefined" === t.data.attrs.rows ? 10 : t.data.attrs.rows,
                maxlength:
                  "undefined" === t.data.attrs.maxLength
                    ? 500
                    : t.data.attrs.maxLength,
              },
              on: { keyup: t.data.on.change },
            },
            [t.slots().default]
          );
        },
      }),
      Xr = n("b9f1"),
      $r = n.n(Xr),
      Jr = n("72f4"),
      Zr = n.n(Jr),
      eo = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e(
            "select",
            {
              attrs: { name: "select", id: "select" },
              class: Zr.a.form + " " + t.data.class,
              on: { change: t.data.on.change },
            },
            [
              e(
                "option",
                {
                  attrs: { value: "suggestion" },
                  domProps: { selected: "suggestion" === t.data.attrs.value },
                },
                ["Suggestion"]
              ),
              e(
                "option",
                {
                  attrs: { value: "report" },
                  domProps: { selected: "report" === t.data.attrs.value },
                },
                ["Report"]
              ),
            ]
          );
        },
      }),
      to = r["c"].extend({
        functional: !0,
        render: function (e, t) {
          return e("div", { class: $r.a.container }, [
            e(K, ["FEEDBACK"]),
            (function () {
              return t.data.attrs.isSubmitted
                ? e("p", ["Your feedback was successfully sent."])
                : e("div", [
                    e(Yr, [
                      e("span", ["Type of feedback"]),
                      e(eo, {
                        on: { change: t.data.on.changeType },
                        class: $r.a.type,
                        attrs: { value: t.data.attrs.type },
                      }),
                    ]),
                    e(
                      Kr,
                      {
                        attrs: { cols: 10, rows: 10 },
                        class: $r.a.body,
                        on: { change: t.data.on.changeMessage },
                      },
                      [t.data.attrs.message]
                    ),
                    e(
                      "p",
                      {
                        class:
                          $r.a.btn +
                          " " +
                          (t.data.attrs.disabled ? $r.a.disabled : $r.a.enable),
                        on: {
                          click: (function () {
                            return t.data.attrs.disabled
                              ? function () {}
                              : t.data.on.submit;
                          })(),
                        },
                      },
                      ["SEND"]
                    ),
                  ]);
            })(),
          ]);
        },
      }),
      no = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.message = ""), (t.type = "report"), (t.isSubmitted = !1), t;
        }
        return (
          Object(i["d"])(t, e),
          Object.defineProperty(t.prototype, "validation", {
            get: function () {
              return !(this.message.length <= 0 || this.messageCount > 500);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "messageCount", {
            get: function () {
              return this.message.length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.render = function (e) {
            var t = this;
            return e(to, {
              attrs: {
                type: this.type,
                message: this.message,
                isSubmitted: this.isSubmitted,
                disabled: !this.validation,
              },
              on: {
                changeType: function (e) {
                  t.type = e.target.value;
                },
                changeMessage: function (e) {
                  t.message = e.target.value;
                },
                submit: function (e) {
                  S.instance()
                    .feedback(t.type, t.message)
                    .then(function (e) {
                      t.isSubmitted = !0;
                    })
                    .catch(function (e) {
                      alert("Error! Please wait a moment");
                    });
                },
              },
            });
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      ao = no,
      io = n("2a28"),
      ro = n.n(io),
      oo = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.titles = []), (t.inputText = ""), t;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.created = function () {
            var e = this;
            "string" === typeof this.$route.query.keyword &&
              (this.inputText = this.$route.query.keyword),
              0 === this.$store.state.mangaList.model.titles.length &&
                this.$store.dispatch("mangaList/fetchData").catch(function (t) {
                  X(e.$router, t);
                });
          }),
          (t.prototype.mounted = function () {
            this.$el.querySelector("." + ro.a.searchForm).focus();
          }),
          Object.defineProperty(t.prototype, "currentTitles", {
            get: function () {
              var e = this;
              return this.$store.state.mangaList.model.titles
                .filter(function (t) {
                  return t.language === f.Title.Language.ENGLISH
                    ? e.$store.state.language.contentsStatus.en
                    : t.language === f.Title.Language.SPANISH
                    ? e.$store.state.language.contentsStatus.es
                    : void 0;
                })
                .filter(function (t) {
                  return (
                    t.name.toLowerCase().includes(e.inputText.toLowerCase()) ||
                    t.author.toLowerCase().includes(e.inputText.toLowerCase())
                  );
                });
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.render = function (e) {
            var t = this;
            return e("div", [
              e("div", { class: ro.a.searchContainer }, [
                e("input", {
                  class: ro.a.searchForm,
                  attrs: { placeholder: this.$t("SEARCH") },
                  domProps: { value: this.inputText },
                  on: {
                    input: function (e) {
                      var n = e.target;
                      t.inputText = n.value;
                    },
                  },
                }),
                e("img", { class: ro.a.icon, attrs: { src: n("77b0") } }),
              ]),
              e("div", { class: ro.a.divider }),
              (function () {
                return 0 !== t.currentTitles.length
                  ? e("div", { class: ro.a.allTitles }, [
                      t.currentTitles.map(function (t) {
                        return e(Dt, { attrs: { title: t } });
                      }),
                    ])
                  : e("p", { class: ro.a.nothingMatched }, [t.$t("NO_RESULT")]);
              })(),
            ]);
          }),
          (t = Object(i["c"])(
            [Object(L["b"])({ components: { AllTitle: Dt } })],
            t
          )),
          t
        );
      })(r["c"]),
      so = oo,
      lo = n("92b0"),
      co = n.n(lo),
      uo = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            return e("div", { class: co.a.wrapper }, [e("router-view")]);
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      po = uo,
      mo = (function () {
        if (!localStorage) return "en";
        var e = localStorage.getItem("service");
        return e && "es" === e
          ? "es"
          : "en" === navigator.language
          ? "en"
          : "es" === navigator.language
          ? "es"
          : "en";
      })(),
      ho = (function () {
        if (!localStorage) return { en: !0, es: !1 };
        var e = localStorage.getItem("contents");
        if (!e)
          return "en" === navigator.language
            ? { en: !0, es: !1 }
            : "es" === navigator.language
            ? { en: !1, es: !0 }
            : { en: !0, es: "es" };
        try {
          return JSON.parse(e);
        } catch (t) {
          return { en: !0, es: !1 };
        }
      })(),
      go = {
        state: { serviceStatus: mo, contentsStatus: ho, isShowSetting: !1 },
        mutations: {
          toggleSettingModal: function (e) {
            e.isShowSetting = !e.isShowSetting;
          },
          setServiceStatus: function (e, t) {
            (e.serviceStatus = t),
              (e.contentsStatus = { en: "en" === t, es: "es" === t }),
              localStorage.setItem("service", e.serviceStatus),
              localStorage.setItem(
                "contents",
                JSON.stringify(e.contentsStatus)
              );
          },
          setContentsStatus: function (e, t) {
            (e.contentsStatus = {
              en: "en" === t ? !e.contentsStatus.en : e.contentsStatus.en,
              es: "es" === t ? !e.contentsStatus.es : e.contentsStatus.es,
            }),
              localStorage.setItem(
                "contents",
                JSON.stringify(e.contentsStatus)
              );
          },
          hideSettingModal: function (e) {
            e.isShowSetting = !1;
          },
        },
        actions: {
          updateServiceLanguage: function (e, t) {
            var n = e.commit,
              a = e.dispatch;
            n("setServiceStatus", t),
              a("home/fetchData"),
              a("featured/fetchData");
          },
        },
      },
      fo = go,
      bo = f.WebHomeView,
      yo = "VIEWED_POPUP",
      wo = {
        namespaced: !0,
        state: {
          model: new bo({
            topBanners: [],
            ranking: [],
            groups: [],
            popup: void 0,
          }),
        },
        mutations: {
          setModel: function (e, t) {
            e.model = t;
          },
        },
        actions: {
          fetchData: function (e) {
            e.dispatch;
            var t = e.commit,
              n = (e.getters, e.rootState);
            return Object(i["b"])(this, void 0, void 0, function () {
              var e, a, r, o, s;
              return Object(i["e"])(this, function (l) {
                switch (l.label) {
                  case 0:
                    return [
                      4,
                      S.instance().fetchTopData(
                        "en" === n.language.serviceStatus ? "eng" : "esp"
                      ),
                    ];
                  case 1:
                    return (
                      (e = l.sent()),
                      (a = e.data.success.webHomeView),
                      (r = JSON.parse(localStorage.getItem(yo) || "[]")),
                      (o = (function () {
                        var e, t;
                        return (null === (e = a.popup) || void 0 === e
                          ? void 0
                          : e.popupId) &&
                          !r.includes(
                            null === (t = a.popup) || void 0 === t
                              ? void 0
                              : t.popupId
                          )
                          ? (r.push(a.popup.popupId),
                            localStorage.setItem(yo, JSON.stringify(r)),
                            a.popup)
                          : void 0;
                      })()),
                      (s = Object(i["a"])(
                        Object(i["a"])({}, e.data.success.webHomeView),
                        { popup: o }
                      )),
                      t("setModel", s),
                      [2]
                    );
                }
              });
            });
          },
        },
      },
      vo = wo,
      Ao = (function (e) {
        function t(t, n) {
          void 0 === n && (n = !1);
          var a = e.call(this, t) || this;
          return (a.isRemoved = n), a;
        }
        return Object(i["d"])(t, e), t;
      })(f.Title),
      ko = Ao,
      _o = {
        namespaced: !0,
        state: { titles: [], loading: !0, shouldUpdate: !0 },
        mutations: {
          setModel: function (e, t) {
            (e.titles = t), (e.shouldUpdate = !1);
          },
          finished: function (e) {
            e.loading = !1;
          },
          remove: function (e, t) {
            e.titles[t].isRemoved = !0;
          },
          undo: function (e, t) {
            e.titles[t].isRemoved = !1;
          },
          shouldUpdate: function (e) {
            e.shouldUpdate = !0;
          },
          start: function (e) {
            e.loading = !0;
          },
        },
        actions: {
          fetchData: function (e) {
            e.dispatch;
            var t = e.commit;
            e.getters, e.rootGetters;
            return Object(i["b"])(this, void 0, void 0, function () {
              var e, n;
              return Object(i["e"])(this, function (a) {
                switch (a.label) {
                  case 0:
                    return t("start"), [4, S.instance().fetchSubscribeList()];
                  case 1:
                    return (
                      (e = a.sent()),
                      (n = e.data.success.subscribedTitlesView.titles.map(
                        function (e) {
                          return new ko(e);
                        }
                      )),
                      t("setModel", n),
                      t("finished"),
                      [2]
                    );
                }
              });
            });
          },
          subscribe: function (e, t) {
            var n = e.commit,
              a = e.state;
            return Object(i["b"])(this, void 0, void 0, function () {
              return Object(i["e"])(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      S.instance().subscribeTitle(a.titles[t].titleId),
                    ];
                  case 1:
                    return e.sent(), n("undo", t), n("shouldUpdate"), [2];
                }
              });
            });
          },
          unsubscribe: function (e, t) {
            var n = e.commit,
              a = e.state;
            return Object(i["b"])(this, void 0, void 0, function () {
              return Object(i["e"])(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      S.instance().unSubscribeTitle(a.titles[t].titleId),
                    ];
                  case 1:
                    return e.sent(), n("remove", t), n("shouldUpdate"), [2];
                }
              });
            });
          },
        },
      },
      Oo = _o,
      So = f.FeaturedTitlesView,
      To = {
        namespaced: !0,
        state: { model: new So({ contents: [] }) },
        mutations: {
          setModel: function (e, t) {
            e.model = t;
          },
        },
        actions: {
          fetchData: function (e) {
            e.dispatch;
            var t = e.commit,
              n = (e.getters, e.rootState);
            return Object(i["b"])(this, void 0, void 0, function () {
              var e;
              return Object(i["e"])(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [
                      4,
                      S.instance().fetchFeaturedList(
                        "en" === n.language.serviceStatus ? "eng" : "esp"
                      ),
                    ];
                  case 1:
                    return (
                      (e = a.sent()),
                      t("setModel", e.data.success.featuredTitlesView),
                      [2]
                    );
                }
              });
            });
          },
        },
      },
      Po = To,
      Co = f.AllTitlesView,
      Io = {
        namespaced: !0,
        state: { model: new Co({ titles: [] }) },
        mutations: {
          setModel: function (e, t) {
            e.model = t;
          },
        },
        actions: {
          fetchData: function (e) {
            e.dispatch;
            var t = e.commit;
            e.getters, e.rootGetters;
            return Object(i["b"])(this, void 0, void 0, function () {
              var e;
              return Object(i["e"])(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, S.instance().fetchAllTitles()];
                  case 1:
                    return (
                      (e = n.sent()),
                      t("setModel", e.data.success.allTitlesView),
                      [2]
                    );
                }
              });
            });
          },
        },
      },
      Eo = Io,
      Lo = f.TitleRankingView,
      No = {
        namespaced: !0,
        state: { model: new Lo({ titles: [] }) },
        mutations: {
          setModel: function (e, t) {
            e.model = t;
          },
        },
        actions: {
          fetchData: function (e) {
            e.dispatch;
            var t = e.commit;
            e.getters, e.rootGetters;
            return Object(i["b"])(this, void 0, void 0, function () {
              var e;
              return Object(i["e"])(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, S.instance().fetchRanking()];
                  case 1:
                    return (
                      (e = n.sent()),
                      t("setModel", e.data.success.titleRankingView),
                      [2]
                    );
                }
              });
            });
          },
        },
      },
      Do = No,
      jo = f.ServiceAnnouncementsView,
      Vo = {
        namespaced: !0,
        state: { model: new jo({ serviceAnnouncements: [] }) },
        mutations: {
          setModel: function (e, t) {
            e.model = t;
          },
        },
        actions: {
          fetchData: function (e) {
            e.dispatch;
            var t = e.commit,
              n = (e.getters, e.rootState);
            return Object(i["b"])(this, void 0, void 0, function () {
              var e;
              return Object(i["e"])(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [
                      4,
                      S.instance().fetchServiceAnnouncementsData(
                        "en" === n.language.serviceStatus ? "eng" : "esp"
                      ),
                    ];
                  case 1:
                    return (
                      (e = a.sent()),
                      t("setModel", e.data.success.serviceAnnouncementsView),
                      [2]
                    );
                }
              });
            });
          },
          fetchWebviewData: function (e, t) {
            e.dispatch;
            var n = e.commit;
            e.getters, e.rootState;
            return Object(i["b"])(this, void 0, void 0, function () {
              var e;
              return Object(i["e"])(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [4, S.instance().fetchServiceAnnouncementsData(t)];
                  case 1:
                    return (
                      (e = a.sent()),
                      n("setModel", e.data.success.serviceAnnouncementsView),
                      [2]
                    );
                }
              });
            });
          },
        },
      },
      xo = Vo,
      Ro =
        (n("7db0"),
        {
          namespaced: !0,
          state: { model: {} },
          mutations: {
            setModel: function (e, t) {
              E["default"].set(e.model, t.id, t.model);
            },
            like: function (e, t) {
              if (e.model) {
                var n = e.model[t.chapterId].comments.find(function (e) {
                  return e.id === t.commentId;
                });
                (n.alreadyLiked = !0), (n.numberOfLikes += 1);
              }
            },
            unlike: function (e, t) {
              if (e.model) {
                var n = e.model[t.chapterId].comments.find(function (e) {
                  return e.id === t.commentId;
                });
                (n.alreadyLiked = !1), (n.numberOfLikes -= 1);
              }
            },
          },
          actions: {
            fetchData: function (e, t) {
              e.dispatch;
              var n = e.commit;
              e.getters, e.rootGetters;
              return Object(i["b"])(this, void 0, void 0, function () {
                var e;
                return Object(i["e"])(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return [4, S.instance().fetchCommentList(t)];
                    case 1:
                      return (
                        (e = a.sent()),
                        n("setModel", {
                          id: t,
                          model: e.data.success.commentListView,
                        }),
                        [2]
                      );
                  }
                });
              });
            },
            like: function (e, t) {
              var n = e.commit;
              return Object(i["b"])(this, void 0, void 0, function () {
                return Object(i["e"])(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, S.instance().likeComments(t.commentId)];
                    case 1:
                      return (
                        e.sent(),
                        n("like", {
                          chapterId: t.chapterId,
                          commentId: t.commentId,
                        }),
                        [2]
                      );
                  }
                });
              });
            },
            unlike: function (e, t) {
              var n = e.commit;
              return Object(i["b"])(this, void 0, void 0, function () {
                return Object(i["e"])(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, S.instance().unlikeComments(t.commentId)];
                    case 1:
                      return (
                        e.sent(),
                        n("unlike", {
                          chapterId: t.chapterId,
                          commentId: t.commentId,
                        }),
                        [2]
                      );
                  }
                });
              });
            },
          },
        }),
      Mo = Ro,
      Uo = {
        namespaced: !0,
        state: { model: {}, isLoading: !1 },
        mutations: {
          setModel: function (e, t) {
            r["c"].set(e.model, t.id, t.model);
          },
          subscribe: function (e, t) {
            var n = e.model[t];
            (n.isSubscribed = !0), r["c"].set(e.model, t, n);
          },
          unsubscribe: function (e, t) {
            var n = e.model[t];
            (n.isSubscribed = !1), r["c"].set(e.model, t, n);
          },
          setLoadingState: function (e, t) {
            e.isLoading = t;
          },
        },
        actions: {
          fetchData: function (e, t) {
            e.dispatch;
            var n = e.commit;
            e.getters, e.rootGetters;
            return Object(i["b"])(this, void 0, void 0, function () {
              var e;
              return Object(i["e"])(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [4, S.instance().fetchTitleDetail(t)];
                  case 1:
                    return (
                      (e = a.sent()),
                      n("setModel", {
                        id: t,
                        model: e.data.success.titleDetailView,
                      }),
                      [2]
                    );
                }
              });
            });
          },
          subscribe: function (e, t) {
            var n = e.commit;
            return Object(i["b"])(this, void 0, void 0, function () {
              return Object(i["e"])(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      n("setLoadingState", !0),
                      [4, S.instance().subscribeTitle(t)]
                    );
                  case 1:
                    return (
                      e.sent(),
                      n("subscribe", t),
                      n("favorited/shouldUpdate", null, { root: !0 }),
                      n("setLoadingState", !1),
                      [2]
                    );
                }
              });
            });
          },
          unsubscribe: function (e, t) {
            var n = e.commit;
            return Object(i["b"])(this, void 0, void 0, function () {
              return Object(i["e"])(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      n("setLoadingState", !0),
                      [4, S.instance().unSubscribeTitle(t)]
                    );
                  case 1:
                    return (
                      e.sent(),
                      n("unsubscribe", t),
                      n("favorited/shouldUpdate", null, { root: !0 }),
                      n("setLoadingState", !1),
                      [2]
                    );
                }
              });
            });
          },
        },
      },
      Bo = Uo,
      Ho = {
        namespaced: !0,
        state: { model: {} },
        mutations: {
          setModel: function (e, t) {
            var n = t.model.pages[t.model.pages.length - 1].lastPage,
              a = { model: t.model, lastPage: n, isSubscribed: n.isSubscribed };
            r["c"].set(e.model, t.id, a);
          },
          subscribe: function (e, t) {
            var n = e.model[t];
            (n.isSubscribed = !0), r["c"].set(e.model, t, n);
          },
          unsubscribe: function (e, t) {
            var n = e.model[t];
            (n.isSubscribed = !1), r["c"].set(e.model, t, n);
          },
        },
        actions: {
          fetchData: function (e, t) {
            e.dispatch;
            var n = e.commit;
            e.getters, e.rootGetters;
            return Object(i["b"])(this, void 0, void 0, function () {
              var e;
              return Object(i["e"])(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [4, S.instance().fetchViewerData(t)];
                  case 1:
                    return (
                      (e = a.sent()),
                      n("setModel", {
                        id: t,
                        model: e.data.success.mangaViewer,
                      }),
                      [2]
                    );
                }
              });
            });
          },
          subscribe: function (e, t) {
            e.dispatch;
            var n = e.commit;
            e.getters, e.rooteGetters;
            return Object(i["b"])(this, void 0, void 0, function () {
              return Object(i["e"])(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, S.instance().subscribeTitle(t.titleId)];
                  case 1:
                    return e.sent(), n("subscribe", t.chapterId), [2];
                }
              });
            });
          },
          unsubscribe: function (e, t) {
            e.dispatch;
            var n = e.commit;
            e.getters, e.rooteGetters;
            return Object(i["b"])(this, void 0, void 0, function () {
              return Object(i["e"])(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, S.instance().unSubscribeTitle(t.titleId)];
                  case 1:
                    return e.sent(), n("unsubscribe", t.chapterId), [2];
                }
              });
            });
          },
        },
      },
      Fo = Ho;
    r["c"].use(Aa["a"]);
    var Go = new Aa["a"].Store({
        modules: {
          language: fo,
          home: vo,
          favorited: Oo,
          featured: Po,
          mangaList: Eo,
          ranking: Do,
          announcements: xo,
          comments: Mo,
          detail: Bo,
          viewer: Fo,
        },
      }),
      Wo = Go,
      qo = n("7090"),
      Yo = n.n(qo),
      Qo = r["c"].extend({
        functional: !0,
        render: function (e) {
          return e("div", { class: Yo.a.container }, [
            e("img", { attrs: { src: n("b3d2"), alt: "" }, class: Yo.a.img }),
          ]);
        },
      }),
      zo = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            return e(Qo);
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      Ko = zo,
      Xo = n("caf9"),
      $o = n("d937"),
      Jo = n.n($o),
      Zo = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.lang = "en"), t;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.created = function () {
            this.$route.params.language
              ? (this.lang = this.$route.params.language)
              : (this.lang = this.$i18n.locale);
          }),
          (t.prototype.render = function (e) {
            return e("div", { class: Jo.a.wrapper }, [
              e("img", {
                attrs: { src: n("01c3"), alt: "about" },
                class: Jo.a.item,
              }),
            ]);
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      es = Zo,
      ts = n("0284"),
      ns = n.n(ts),
      as = n("1c78"),
      is = n.n(as),
      rs = r["c"].extend({
        functional: !0,
        render: function (e) {
          return e("div", { class: is.a.container }, [
            e("img", { attrs: { src: n("77bc"), alt: "" }, class: is.a.img }),
          ]);
        },
      }),
      os = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.render = function (e) {
            return e(rs);
          }),
          (t = Object(i["c"])([L["b"]], t)),
          t
        );
      })(r["c"]),
      ss = os,
      ls = n("2332"),
      cs = n.n(ls),
      us = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.data = new f.PublisherNews()), t;
        }
        return (
          Object(i["d"])(t, e),
          (t.prototype.mounted = function () {
            var e = this,
              t =
                "en" === this.$store.state.language.serviceStatus
                  ? "eng"
                  : "esp",
              n = this.$route.params["id"];
            S.instance()
              .publisherNewsList(n, t)
              .then(function (t) {
                var n = t.data;
                n.error
                  ? X(e.$router, n.error)
                  : (e.data = n.success.publisherNewsListView);
              });
          }),
          (t.prototype.render = function (e) {
            var t;
            return e("div", { class: cs.a.container }, [
              this.data.banner &&
                e("img", {
                  attrs: {
                    src:
                      (null === (t = this.data.banner) || void 0 === t
                        ? void 0
                        : t.imageUrl) || "",
                  },
                  class: cs.a.banner,
                }),
              (this.data.newsList || []).map(function (t) {
                return e(vt, { attrs: { publisherNews: t } });
              }),
            ]);
          }),
          (t = Object(i["c"])([r["a"]], t)),
          t
        );
      })(r["c"]),
      ds = us,
      ps = n("58ca"),
      ms = n("9483");
    Object(ms["a"])("/service-worker.js", {
      ready: function () {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function () {
        console.log("Service worker has been registered.");
      },
      cached: function () {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function () {
        console.log("New content is downloading.");
      },
      updated: function () {
        console.log("New content is available; please refresh.");
      },
      offline: function () {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function (e) {
        console.error("Error during service worker registration:", e);
      },
    });
    var hs = n("ee98"),
      gs = n.n(hs);
    E["default"].use(ps["a"]),
      E["default"].use(Xo["a"]),
      E["default"].use(N["a"]),
      E["default"].use(Gt.a),
      E["default"].use(Aa["a"]),
      E["default"].use(_n["a"]),
      E["default"].use(gs.a);
    var fs = [
        { path: "", redirect: "/main" },
        {
          path: "/main",
          component: mr,
          children: [
            { path: "", redirect: "/updates" },
            { path: "/error", component: ca },
            { path: "/updates", component: kn },
            { path: "/favorited", component: ne },
            {
              path: "/manga_list",
              component: Ut,
              children: [
                { path: "", redirect: "all" },
                { path: "all", component: Vt },
                { path: "hot", component: ve },
              ],
            },
            { path: "/featured", component: Le },
            { path: "/titles/:id", component: Pt },
            { path: "/comments/:id", component: wa },
            { path: "/faq", component: jr },
            { path: "/announcement", component: Gr },
            { path: "/feedback", component: ao },
            { path: "/maintenance", component: Ko },
            { path: "/about_us", component: es },
            { path: "/search_result", component: so },
            { path: "/publisher_news/:id", component: ds },
          ],
        },
        { path: "/blocking", component: ss },
        { path: "/viewer/:chapterId", component: ra },
        {
          path: "/webview",
          component: po,
          children: [
            { path: "/webview/announcement/:language", component: Gr },
            { path: "/webview/faq/:language", component: jr },
            {
              path: "/webview/questionnaire/:lang/:questionnaire_key",
              component: I,
            },
          ],
        },
        { path: "*", redirect: "/error" },
      ],
      bs = new N["a"]({
        mode: "history",
        routes: fs,
        scrollBehavior: function (e, t, n) {
          return n || { x: 0, y: 0 };
        },
      });
    bs.beforeEach(function (e, t, n) {
      e.hash ? n(e.hash.split("#")[1]) : n();
    }),
      E["default"].use(ns.a, { id: "UA-132849856-1", router: bs });
    var ys = va,
      ws = new _n["a"]({ locale: mo, fallbackLocale: mo, messages: ys });
    (E["default"].config.productionTip = !1),
      new E["default"]({
        i18n: ws,
        store: Wo,
        render: function (e) {
          return e(B);
        },
        router: bs,
        components: { App: B },
      }).$mount("#app");
  },
  d630: function (e, t, n) {
    e.exports = {
      container: "styles-module_container_3Ng4k",
      flexContainer: "styles-module_flexContainer_2BcQU",
      item: "styles-module_item_19Jr0",
    };
  },
  d682: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAACsCAMAAACO/jijAAAArlBMVEUAAAD/3AD/4gD/2AD/2AD/2AD/3AD/2AD/2AD/4wD/2AD/4QD/3AD/2AD/3QD/2AD/2AD/2AD/2gD/4wD/2AD/2AD/2QD/2QD/2AD/2AD/2QD/2QD/2gD/2AD/2AD/2AD/2AD/2AD/2AD/2AD/2QD/2AD/2QD/2AD/2QD/2AD/2QD/2AD/2AD/2AD/2AD/2AD/2AD/2gD/2QD/3AD/2AD/2AD/2QD/2QD/1wD/1wAJyLz3AAAAOXRSTlMAAwadjFYV/PQM+RAlgRnw2cUrCeCGXErovHlwNtGrpeTKt3RrZiHdQLNR1WGwn5HsRDEdwJY8fc2yGc0OAAAHOUlEQVR42uzZ6WKiMBQF4IMboAjivrY67ktr7X7e/8WmMy0I5dIQtdM/8/2m99Qkl8SI//7T4dzj5/Sr+DmTLX7MA1nHTxmQL/gWhgEVnxxByYC+5xUUXJOkA4XhAfr2eyjM+GYKhVYe+ppjKPT4ZgKFWteAriH5jC+VTP7xgC/VyRV0tciClHg041/90hGSquQeumpkE0mHLlPddZC0JcfQVOebe+mj/2KKnoskh1TMnzxaZAuSQZkCs29A0OebAvRs+aYG0X2NCcshRK9804QWh3/VIbJv+cm1DdGCfw2htCqGbj9qFkMHRBU9Rli7tDp5oY7M7THV4wNiFmOGuk72Ov4CKYy+SZH5YiCuYTFUruCTaZkis2og3XBJQTPZKxtGtDPWGSvedZVrJlxVkBB77AYJtlDnpgKVncUYa46knPc+4OX3R2wktT3GlGfIwHllxKgOQeejuT9avijWmTBiW0cmuSVDzQYk+ffmDlr+Sq5TY2gs1pH3yiMXAuOOtHbHlrfE0pVonQWymTNiBsGBfHXClvfJDQQ7RkyRTY8RjxA8sZBDyGiZtxCsGeFDJo9W833mzRISjFEHMattDgl2+b1OTZ4/2e6juT9adS78e4lC0iGmHdS5TZ0/ebSsXdjyPZzoJnxJtD15/uTRGjnHljcrOIltHV8Si4k4f+Jo7XNhqxbIHU5SJJ8a0TpzqF3Fz4Gd7hoidZ1N/OTZg1Jj7SLGXdsQqOs8IKaUYV9pGPgsPdy2deucz36eF9bbsWeS9MbbdWG+quBfaBxavskEc9I6NPC9VrceU1nXBwPfpVRtUmHcKuE7uAWLGVj7B1yaXSgzo/JTBRfVHlNDd4fLWfSoyXdwIRuP2qw2LiG350nyDZyt4lNg+fnpZjV0nPvVZpp/9Ch4dXGmhy0T/JfnHGKMYd9nwtLBWeqJVd6sOhAtXpaJVX+PMzhdxm3bBlIZxRHjvDpO5jYZMy4aqsb4/BcLnKgyYpRZsKHUaJUZVSvhJEZPuPJRq9cY5edwiqrwJV2g+mpewAlWJiOq0NBnVAfaSl0emTNo2Zk8unOh65YRbWjaRNOvoOmZEVNom58x8Mbo3CXzwqNaDjpmPOoZOMWaR31oyEXvF12cpNJk6K5x4ox1INBdNgNkZiwzLdXF9a+AWDzP0DiHrIoMeS7SzC2G8hCU7hjaaawV9VJxf5GKcAwYeoT+PZxnQ9b2qA5vdPXv4QbKV3rphswQjql+t/kMlEuQbLrMFm5bDGwz38MFbhS34qpwRB51kUWHoQ0EPWYPP+huTnsGvBwEE41woxt7RG3EwBpfhj9eyZXlcV8iA6MsvBSFcGuGgjp8zpANNYeh+y/CHxcQwhXVNNabmUsNtwZApnBYDBShNmWghrRw30HW8FetM+hesd4wsQYGModfi8+oT45PEO0dIHt4S+sceeyfFlLohPcZ+AW141bZv0T4jAFfa1uZXSJ8x8BI67elqU64+i0zgdqN1BvqcHXn9iCTe6NwifBqZH9We2Lgd/v22psoEAVg+IBWEMQiCigFW8Vbbb1UtPb8/z+2yW52BljtMBdtsuH5jm+iHAwzsFURpx/3DBR7MHsq4vQU2gFbQP/OVcQHueFhi5HoysfbSHwAm43EWj7+gUQGFQzpxV0+Ts8gE4Br0F35+ISOOe+9eUc2nhmcdw0eEr5sPEIiBuD70Qey8Tc6txpU0kAilIuvkHjmX1LoycWnAgscSyRWMvEYiaEmsOrak4lPRZbTFhYS7+LxBySMjtDa594WjbdfxFZAOwbzOHa8gdQBOIyRmovFA6RegUfHQsI6XJ3Jp78+oMwzkTAOwMUv7NJI7g3tgE9/ILVLYydIvbSBU4g5SRe4tCaY8wDcTuI7k5mLOc/Ar59gzvATKotfMMdtg4COiTlGBBewnwK3PBCyNjBvuoAKuhssCEDQHAvMSAcGLTWxIAVhZyxy3/Vv04GLRU2Q0MSSwcyGK+zZEktOICXCMmu8bl+YjXBsYZkDkujOJGX1nLCjkS+7EzpHUi7sgUoL93iR5U5Gm81o4lp40eMaFMh6KGCyACU0H7ntdFAl/kIuyScopM0esTIz1UCtll8xbza7oJ593iPTo9+C2+gHUwO/YYyCNtxQ92lk4kXWKM3g5vSV8+oamGMsp85Kh7vRvTCYp46TzoLQ0+F/pYkfIt/eOzZwsaOhripOrhwc1yOFcUTrdIBKvJ2JqDL+h+t7zLLzhohq44TrxDpcoR9IWXGcspLGLO6XuvG88WUhoTZeZgyS42a7O5+b280xGRhIqI8z1fE6XsfreB2v4wriZpSaPxV/XQBk4x+JD9bwW7i8Z7z8gkPft+4b73mQ4x3vGN/PoSQY3iu+bcE/7NNd4m8ruChObh43I5254qw+Tkf7umx8izgdbYZwqTzO9+6S6jgdbTbvqDxOR5stGKqNb1vAwT4pjJPRrixOdFBVh1pNkV/Sglg88IeFvgAAAABJRU5ErkJggg==";
  },
  d72e: function (e, t, n) {
    e.exports = { badge: "styles-module_badge_2AnR1" };
  },
  d775: function (e, t, n) {
    e.exports = {
      title: "Comments-module_title_2liw6",
      commentsHeader: "Comments-module_commentsHeader_2DY3D",
      leaveBtn: "Comments-module_leaveBtn_1hM8H",
      message: "Comments-module_message_5Jt9x",
      comments: "Comments-module_comments_3IVW0",
    };
  },
  d937: function (e, t, n) {
    e.exports = {
      item: "styles-module_item_30DgJ",
      wrapper: "styles-module_wrapper_1Ic9M",
    };
  },
  dd7f: function (e, t, n) {
    e.exports = { triangle: "styles-module_triangle_2e2tQ" };
  },
  eb35: function (e, t, n) {
    e.exports = {
      titleNoCheck: "styles-module_titleNoCheck_1RSbO",
      titleChecked: "styles-module_titleChecked_BQXwk",
      titleText: "styles-module_titleText_2lpJn",
      title: "styles-module_title_25DO8",
      body: "styles-module_body_ZM_f-",
    };
  },
  ec71: function (e, t, n) {
    e.exports = {
      contents: "SubscribedTitle-module_contents_2S_dW",
      imgWrapper: "SubscribedTitle-module_imgWrapper_usHUo",
      image: "SubscribedTitle-module_image_2U_La",
      removedMessage: "SubscribedTitle-module_removedMessage_3DigS",
      btn: "SubscribedTitle-module_btn_22S2b",
      removed: "SubscribedTitle-module_removed_2Alyi",
    };
  },
  eda8: function (e, t, n) {
    e.exports = {
      title: "UpdatedTitle-module_title_2KlMr",
      titleImage: "UpdatedTitle-module_titleImage_3DBmi",
      titleDescription: "UpdatedTitle-module_titleDescription_Cf0hO",
      titleName: "UpdatedTitle-module_titleName_1QO_s",
      author: "UpdatedTitle-module_author_1ltec",
      titleWrapper: "UpdatedTitle-module_titleWrapper_2EQIT",
      chapter: "UpdatedTitle-module_chapter_XrLgd",
      chapterTitleWrapper: "UpdatedTitle-module_chapterTitleWrapper_3rnA_",
      chapterTitle: "UpdatedTitle-module_chapterTitle_kZUrz",
      chapterDescription: "UpdatedTitle-module_chapterDescription_riZF7",
      latest: "UpdatedTitle-module_latest_2HLFG",
    };
  },
  f0e0: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA+/j9gI4oBPPUkbqI6Mu2f/2BYUcAAAC8SURBVGje7dhLCkMhEETR6nT8vvzc/2YzlKDwAumCDOrOBKmDU6GU+iynVseP1ZYy9pVkIyTrZbv/HGEdO+E2AutYyhYJWOY8YJYW4BELtAW4xwJ1AS4jNgECBAgQIEBAFDAvnZ0FxAAm4C+BbxMgQIAAAQIExAEeu1/ZQGMDiQxYJgMdXOAoVMB6AQeY3/vnwBXROXkfTt6Hk/fh5H04eR9O3oeT98HeB3sf7H2w98HeB3sf7H28oJRi9QZxXUh+1+m78QAAAABJRU5ErkJggg==";
  },
  f21f: function (e, t, n) {
    e.exports = {
      container: "index-module_container_3nJxv",
      oneImage: "index-module_oneImage_2pH_3",
    };
  },
  f6a5: function (e, t, n) {
    e.exports = {
      title: "HorizontalTitleList-module_title_1nID2",
      horizontalList: "HorizontalTitleList-module_horizontalList_3eVz7",
      rightCursor: "HorizontalTitleList-module_rightCursor_o5OUq",
      leftCursor: "HorizontalTitleList-module_leftCursor_B1px5",
      image: "HorizontalTitleList-module_image_3C1HQ",
      item: "HorizontalTitleList-module_item_2s8up",
      itemListWrapper: "HorizontalTitleList-module_itemListWrapper_23ST9",
      itemList: "HorizontalTitleList-module_itemList_1kB_K",
    };
  },
  f6ca: function (e, t, n) {
    e.exports = {
      outerWrapper: "Viewer-module_outerWrapper_1_nd2",
      viewerContainer: "Viewer-module_viewerContainer_iCeeB",
      wrapper: "Viewer-module_wrapper_11OpA",
      slider: "Viewer-module_slider_3iqpi",
      footer: "Viewer-module_footer_22XOt",
      appear: "Viewer-module_appear_1BZwO",
      hidden: "Viewer-module_hidden_2BlF7",
      container: "Viewer-module_container_1dmXQ",
      pageNumber: "Viewer-module_pageNumber_2Ma3Q",
      commentIcon: "Viewer-module_commentIcon_29o4d",
      chapterContainer: "Viewer-module_chapterContainer_2FTyl",
      thumbnailContainer: "Viewer-module_thumbnailContainer_fu9iS",
      nextChapterBtn: "Viewer-module_nextChapterBtn_MLwVx",
      nextChapterContainer: "Viewer-module_nextChapterContainer_yobGl",
      nextChapterThumbnail: "Viewer-module_nextChapterThumbnail_31VQc",
      btn: "Viewer-module_btn_2Qqqj",
      subscribeBtn: "Viewer-module_subscribeBtn_1P5jq",
      default: "Viewer-module_default_2Db0r",
      done: "Viewer-module_done_2ijww",
      commentsBtn: "Viewer-module_commentsBtn_12WKC",
      cautionContainer: "Viewer-module_cautionContainer_1laqP",
      cautionImage: "Viewer-module_cautionImage_1sZwu",
      bannerContainer: "Viewer-module_bannerContainer_rSJE0",
      bannerImg: "Viewer-module_bannerImg_29B42",
      banner: "Viewer-module_banner_2iWA8",
      announce: "Viewer-module_announce_14wJs",
      comming: "Viewer-module_comming_3yiP2",
      date: "Viewer-module_date_22SZp",
      mayChange: "Viewer-module_mayChange_3eVrK",
      latestWrapper: "Viewer-module_latestWrapper_29vEt",
      toastHorizontal: "Viewer-module_toastHorizontal_zcLMp",
      fadeIn: "Viewer-module_fadeIn_B8Q8y",
      toastVertical: "Viewer-module_toastVertical_3zUwQ",
      toastHidden: "Viewer-module_toastHidden_3spzt",
      toast: "Viewer-module_toast_80iPl",
      modeIcon: "Viewer-module_modeIcon_1le6x",
      mode: "Viewer-module_mode_2ePS_",
      appBannerWrapper: "Viewer-module_appBannerWrapper_3Zl3L",
      appBanner: "Viewer-module_appBanner_pZHQm",
    };
  },
  f877: function (e, t, n) {
    e.exports = { gridContainer: "UpdatedTitles-module_gridContainer_mw8H9" };
  },
  fd5c: function (e, t, n) {
    e.exports = n.p + "img/img_simulrelease@2x.6f450e50.png";
  },
});
