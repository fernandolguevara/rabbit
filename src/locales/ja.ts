import stripMargin from '@/utils/stripMargin';

export default {
  general: {
    loading: '読み込み中',
    updating: '更新中',
  },
  notFound: {
    title: 'ページが見つかりませんでした',
    back: '戻る',
  },
  posting: {
    placeholder: 'いまどうしてる？',
    placeholderReply: '返信を投稿',
    emojiPicker: '絵文字を追加',
    contentWarning: 'コンテンツ警告を設定',
    contentWarningReason: '警告の理由',
    uploadImage: '画像を投稿',
    submit: '投稿',
    close: '閉じる',
    forbiddenToIncludeNsec: '投稿に秘密鍵(nsec)を含めることはできません。',
    failedToUploadFile: 'ファイルのアップロードに失敗しました: {{filenames}}',
    replyToPre: '',
    replyToAnd: ' と ',
    replyToPost: 'に返信',
  },
  column: {
    home: 'ホーム',
    notification: '通知',
    relay: 'リレー',
    japanese: '日本語',
    posts: '投稿',
    reactions: 'リアクション',
    channel: 'チャンネル',
    bookmark: 'ブックマーク',
    search: '検索',
    myPosts: '自分の投稿',
    myReactions: '自分のリアクション',
    back: '戻る',
    loadLatest: '最新の投稿を読み込む',
    loadOld: '古い投稿を読み込む',
    addRelayColumn: {
      add: '追加',
    },
    config: {
      columnWidth: 'カラム幅',
      widest: '特大',
      wide: '大',
      medium: '中',
      narrow: '小',
      moveLeft: '左に移動',
      moveRight: '右に移動',
      removeColumn: '削除',
    },
  },
  profile: {
    following: 'フォロー',
    followers: 'フォロワー',
    loadFollowers: '読み込む',
    editProfile: '編集',
    follow: 'フォロー',
    unfollow: 'フォロー解除',
    followingCurrently: 'フォロー中',
    followsYou: 'フォローされています',
    copyPubkey: 'IDをコピー',
    showJSON: 'JSONを確認',
    mute: 'ミュート',
    unmute: 'ミュート解除',
    followMyself: '自分をフォロー',
    unfollowMyself: '自分をフォロー解除',
    addColumn: 'カラムを追加',
    addUserColumn: 'ユーザカラムを追加',
    addUserHomeColumn: 'ホームカラムを追加',
    confirmUnfollow: '本当にフォロー解除しますか？',
    confirmUpdateEvenIfEmpty: stripMargin`
      フォローリストが空のようです。初めてのフォローであれば問題ありません。
      そうでなければ、リレーとの接続がうまくいっていない可能性があります。ページを再読み込みしてリレーと再接続してください。
      また、他のクライアントと同じリレーを設定できているどうかご確認ください。

      続行しますか？
    `,
    failedToUpdateFollowList: 'フォローリストの更新に失敗しました',
    failedToFetchLatestFollowList:
      '最新のフォローリストを取得できませんでした。リレーの接続状況が悪い可能性があります。',
    edit: {
      icon: 'アイコン',
      banner: 'バナー',
      name: 'ユーザ名',
      displayName: 'ユーザ名',
      about: '自己紹介',
      website: 'ウェブサイト',
      nip05: 'ドメイン証明（NIP-05）',
      lightningAddress: 'LNURLアドレス / ライトニングアドレス',
      lightningAddressDescription: 'どちらか片方のみが保存されます。',
      otherProperties: 'その他の項目',
      save: '更新',
      cancel: 'キャンセル',
      updating: '更新中...',
      updateSucceeded: '更新しました',
      failedToUpdatePartially: '{{count}}個のリレーで更新に失敗しました',
      failedToUpdate: 'すべてのリレーで更新に失敗しました',
    },
  },
  post: {
    replyToPre: '',
    replyToPost: 'への返信',
    copyEventId: 'IDをコピー',
    showJSON: 'JSONを確認',
    showReposts: 'リポスト一覧',
    showReactions: 'リアクション一覧',
    deletePost: '削除',
    confirmDelete: '本当に削除しますか？',
    deletedSuccessfully: '削除しました（画面への反映にはリロード）',
    failedToDeletePartially: '{{count}}個のリレーで削除に失敗しました',
    failedToDelete: 'すべてのリレーで削除に失敗しました',
    showImage: '画像を表示する',
    showVideo: '動画を表示する',
    showPreview: 'プレビューを表示する',
    showOverflow: '続きを読む',
    hideOverflow: '隠す',
    download: 'ダウンロード',
    contentWarning: {
      show: '表示するにはクリック',
      reason: '理由',
      hide: '隠す',
    },
    failedToFetchEvent: '取得に失敗しました',
    unexpectedKind: '予期しないイベントです（kind:{{kind}}）',
    unsupportedKind: '未対応のイベントです（kind:{{kind}}）',
  },
  notification: {
    reposted: 'がリポスト',
    reacted: 'がリアクション',
    zapped: 'がZap',
  },
  zap: {
    lud06: 'LNURLアドレス',
    lud16: 'ライトニングアドレス',
    fetchingLnUrlEndpoint: 'LNURLエンドポイントを取得中...',
    fetchingLnUrlEndpointError: 'LNURLエンドポイントを取得できませんでした',
    lnUrlEndpointError: 'LNURLエンドポイントがエラーを返しました: ',
    fetchingLnUrlInvoice: 'ライトニングインボイスを取得中...',
    fetchingLnUrlInvoiceError: 'ライトニングインボイスを取得できませんでした',
    userDidNotConfigureZap: 'このユーザはZapを設定していないため、Zapできません。',
    lnurlServiceDoesNotAllowNostr:
      '受取人のLNURLサービスがZapをサポートしていないため、通常のライトニング送金となります。',
    zapSplitIsNotSupported: 'Zap分配はまだサポートされていません。投稿者のみへの送金となります。',
    comment: 'コメント (任意)',
    sendViaWallet: 'ウォレットで送る',
    sendViaWebLN: '拡張機能で送る',
    completed: '完了',
  },
  config: {
    config: '設定',
    confirmImport: 'インポートしますか？（現在の設定は上書きされます）',
    copyToClipboard: 'クリップボードに設定をコピー',
    importFromClipboard: '設定をクリップボードから読み込む',
    account: {
      profile: 'プロフィール',
      openProfile: '開く',
      editProfile: '編集',
      backupConfig: '設定のバックアップ',
      save: '保存',
      restore: '復元',
      restored: '復元しました',
      failedToRestore: '復元に失敗しました',
    },
    relays: {
      relays: 'リレー',
      numOfRelays_one: '{{count}}個のリレーが設定されています。',
      numOfRelays_other: '{{count}}個のリレーが設定されています。',
      addRelay: '追加',
      importRelays: 'インポート',
      importFromExtension: '拡張機能からインポート',
      notConfigured: 'リレーが設定されていません',
      askImport: 'これらのリレーをインポートしますか？',
      failedToImport: 'インポートに失敗しました',
      imported_one: '{{count}}個のリレーをインポートしました',
      imported_other: '{{count}}個のリレーをインポートしました',
    },
    display: {
      display: '表示',
      colorTheme: 'カラーテーマ',
      timeNotation: '時刻の表記',
      relativeTimeNotation: '相対表記',
      relativeTimeNotationExample: '7秒前',
      absoluteTimeNotationShort: '絶対表記 (短形式)',
      absoluteTimeNotationShortExample: '昨日 23:55',
      absoluteTimeNotationLong: '絶対表記 (長形式)',
      absoluteTimeNotationLongExample: '2020/11/8 21:02:53',
      reaction: 'リアクション',
      enableEmojiReaction: '絵文字を選べるようにする',
      showEmojiReaction: '投稿にリアクションされた絵文字を表示する',
      embedding: '埋め込み',
      embeddingDescription: '各項目の埋め込みを有効にするかどうか',
      others: 'その他',
      keepOpenPostForm: '投稿後も投稿欄を開いたままにする',
      showMediaByDefault: 'デフォルトで画像や動画を読み込む',
      hideNumbers: 'いいねやリポスト、フォロワーなどの数を隠す',
    },
    customEmoji: {
      customEmoji: 'カスタム絵文字',
      shortcode: '名前',
      url: 'URL',
      addEmoji: '追加',
      removeEmoji: '削除',
      emojiImport: '絵文字のインポート',
      emojiImportDescription:
        '絵文字の名前をキー、画像のURLを値とするJSONを読み込むことができます。',
      importEmoji: 'インポート',
    },
    mute: {
      mute: 'ミュート',
      mutedUsers: 'ミュートしたユーザ',
      mutedKeywords: 'ミュートした単語',
      add: '追加',
    },
  },
  hello: {
    signerChecking: 'ブラウザ拡張機能のインストール状況を確認中...',
    signerUnavailable: 'ブラウザ拡張機能が必要です',
    loginWithSigner: '拡張機能でログイン',
    signerUnavailableMessage: '利用するにはブラウザ拡張機能をインストールしてください。',
    reloadAfterInstall: 'インストールが完了したら再読み込みしてください。',
    reload: '再読み込み',
  },
  about: {
    bugReport: 'バグ報告',
    sourceCode: 'ソースコード',
    termOfService: '利用規約',
    agplText: stripMargin`
      このプログラムは自由ソフトウェアです。

      フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス
      （バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で
      再頒布や改変、あるいはその両方を行うことができます。

      このプログラムは役立つことを願って頒布されていますが、
      **いかなる保証もありません**。

      _商品性_や_特定目的適合性_ に対する保証は暗示されたものも含めて存在しません。
      詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。
    `,
    agplTranslationJa: '参考日本語訳',
    usingLibraries: '使用ライブラリ',
  },
  domainTransfer: {
    announcementHead: 'Rabbitは新しいドメインに移りました',
    announcementDescription: 'ブックマークやリンクの更新をお願いします',
    howToMigrateSettings: '設定の移行方法について',
    close: '閉じる',
  },
};
