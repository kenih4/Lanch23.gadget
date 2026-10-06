// ランチャー設定ファイル (UTF-8)
// ここを編集するだけでボタンの追加・変更・パス変更ができます。
//
// ■ vars : パス中で {名前} として使える変数
//   自動変数: {year}=西暦  {fy}=年度(4月始まり)  {reiwa}=年度の令和2桁
// ■ buttons : 上から3個ずつ横に並びます
//   label : ボタン表示名
//   cls   : 色 (B=青 / G=緑 / O=橙 / SHIKIRI=区切り(空きボタン))
//   do    : 実行内容の配列。要素は以下のいずれか
//     { folder: 'パス' }               エクスプローラーでフォルダを開く
//     { url:    'http://...' }         既定のブラウザで開く
//     { url:    'http://...', browser: '{chrome}' }  指定したブラウザで開く
//     { run:    'パス', args: '引数' }  ファイル/exeを実行 (argsは省略可)
//   パスの区切りは / でも \ でもOK (folder/run は / を \ に変換します)
var CONFIG = {
    vars: {
        opr18:   '//saclaopr18.spring8.or.jp',
        oprfs:   '//saclaoprfs01.spring8.or.jp',
        opr19:   'http://saclaopr19.spring8.or.jp',
        xfelfs:  '//xfelfs-ts.spring8.or.jp',
        common:  '{opr18}/common',
        accinfo: '{common}/sesaccfs2/operation/加速器情報',
        gitdir:  'C:/Users/kenic/Dropbox/gitdir',
        note:    'C:/me/bin/open_note.exe',
        chrome:  'C:/Program Files/Google/Chrome/Application/chrome.exe'
    },

    buttons: [
        { label: 'Common',  cls: 'B', "do": [{ folder: '{common}/運転状況集計/最新/SACLA' }] },
        { label: 'manual',  cls: 'G', "do": [{ folder: '{common}/マニュアルNEW' },
                                            { run: '{common}/マニュアルNEW/マニュアルリストNEW.xlsm' }] },
        { label: 'Users',   cls: 'B', "do": [{ folder: '{opr18}/ses-users/jkenichi' }] },

        { label: '水',       cls: 'B', "do": [{ folder: '{common}/冷却水関係' }] },
        { label: 'シフト表',  cls: 'B', "do": [{ folder: '{common}/シフト/{fy}年度' }] },
        { label: '各種原紙',  cls: 'B', "do": [{ folder: '{common}/各種原紙' }] },

        { label: '作業報告',  cls: 'B', "do": [{ folder: '{common}/作業報告/作業報告書/SACLA/{fy}年度/報告書' }] },
        { label: '故障交換',  cls: 'B', "do": [{ folder: '{common}/故障交換履歴/SACLA' }] },
        { label: '停止期間',  cls: 'B', "do": [{ folder: '{common}/停止期間工程/R{reiwa}年度停止期間工程/夏期停止期間' }] },

        { label: '', cls: 'SHIKIRI', "do": [] },
        { label: '', cls: 'SHIKIRI', "do": [] },
        { label: '', cls: 'SHIKIRI', "do": [] },

        { label: 'Mail',      cls: 'O', "do": [{ url: 'https://sp8sun.spring8.or.jp/am_bin/amlogin' }] },
        { label: 'DB SACLA',  cls: 'O', "do": [{ url: 'http://srweb-dmz-03.spring8.or.jp/cgi-bin/MDAQ/mdaq_group_list.py?accel_id=5001&grp_id=0&s=Show' }] },
        { label: 'DB SCSS+',  cls: 'O', "do": [{ url: 'http://xfweb-dmz-03.spring8.or.jp/cgi-bin/MDAQ/mdaq_group_list.py' }] },

        { label: 'SP8 Staff', cls: 'O', "do": [{ url: 'http://staff.spring8.or.jp/staff-mt/spring8_portal/' }] },
        { label: 'SR予定表',  cls: 'O', "do": [{ url: 'http://haruya.spring8.or.jp/ExpFaci/index.html' }] },
        { label: 'サマリー',  cls: 'O', "do": [{ url: '{opr19}/~summary/display_ui.html?sort=main_id%20desc&limit=0,5#EDIT' }] },

        { label: 'QR',        cls: 'O', "do": [{ url: 'http://qrserver/' }] },
        { label: 'カレンダー', cls: 'O', "do": [{ url: 'http://calsrv01.spring8.or.jp/cal/' }] },
        { label: 'カレンダーgantt',   cls: 'O', "do": [{ url: 'http://saclaopr19.spring8.or.jp/~lognote/calendar/gantt-group-tasks-together.html', browser: '{chrome}' }] },

        { label: '-',         cls: 'B', "do": [{ folder: '{xfelfs}/share/svoc-work' }] },
        { label: '-', cls: 'B', "do": [{ folder: '{opr18}/shared/SACLA_Tuning_Data' }] },
        { label: 'SCM',               cls: 'B', "do": [{ folder: '{xfelfs}/share/SCM/ScreenInfo' }] },

        { label: '立上調整',  cls: 'B', "do": [{ folder: '{accinfo}/立上げ調整' }] },
        { label: 'u運転',     cls: 'G', "do": [{ run: '{gitdir}/hikitsugi/docs/u運転メモ.xlsx' }] },
        { label: 'ランチ',    cls: 'B', "do": [{ folder: 'C:/Users/kenic/Dropbox/Shortcut' }] },

        { label: '朝MT',     cls: 'B', "do": [{ folder: '{common}/SACLA朝ミーティング資料/{year}_acc' }] },
        { label: '-', cls: 'B', "do": [{ folder: '' }] },
        { label: '朝MT SR',  cls: 'B', "do": [{ folder: '{accinfo}/朝ミーティング報告事項/{year}' }] },

        { label: 'start仕事', cls: 'G', "do": [{ run: '{gitdir}/start_Shigoto/start_Shigoto.bat' }] }
    ]
};
