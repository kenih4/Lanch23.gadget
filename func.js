    function init() {
      var oBackground = document.getElementById("imgBackground");
      oBackground.src = "url(icon.png)";
      System.Gadget.Flyout.file = "main.html";
	}
    function showFlyout() {
      System.Gadget.Flyout.show = true;
    }
    function exe(n) {
		currentYear = new Date().getFullYear(); // constを付けると動かなくなる
		switch (n){
			case 0:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\common\\運転状況集計\\最新\\SACLA');
				break;
			case 1:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\common\\マニュアルNEW');
				System.Shell.execute('\\\\saclaopr18.spring8.or.jp\\common\\マニュアルNEW\\マニュアルリストNEW.xlsm');
				break;
			case 2:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\ses-users\\jkenichi');
				break;

			case 3:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\common\\冷却水関係');
				break;
			case 4:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\common\\シフト\\' + currentYear + '年度');
				break;				
			case 5:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\common\\各種原紙');
				break;

			case 6:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\common\\作業報告\\作業報告書');
				break;
			case 7:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\common\\故障交換履歴\\');
				break;
			case 8:
				break;				

			case 9:
				break;
			case 10:
				break;
			case 11:
				break;


			case 12:
				System.Shell.execute('https://sp8sun.spring8.or.jp/am_bin/amlogin');
				break;
			case 13:
				System.Shell.execute('http://srweb-dmz-03.spring8.or.jp/cgi-bin/MDAQ/mdaq_group_list.py?accel_id=5001&grp_id=0&s=Show');
				break;
			case 14:
				System.Shell.execute('http://xfweb-dmz-03.spring8.or.jp/cgi-bin/MDAQ/mdaq_group_list.py');
				break;

			case 15:
				System.Shell.execute('http://staff.spring8.or.jp/staff-mt/spring8_portal/');
				break;				
			case 16:				
				break;
			case 17:
				System.Shell.execute('http://saclaopr19.spring8.or.jp/~summary/display_ui.html?sort=main_id%20desc&limit=0,5#EDIT');
				break;

			case 18:
				System.Shell.execute('http://qrserver/');
				break;
			case 19:
				System.Shell.execute('http://calsrv01.spring8.or.jp/cal/');
				break;
			case 20:
				break;

			case 21:
				System.Shell.execute('explorer.exe', '\\\\xfelfs-ts.spring8.or.jp\\share\\svoc-work');
				break;
			case 22:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\shared\\SACLA_Tuning_Data');				
				break;
			case 23:
				System.Shell.execute('explorer.exe', '\\\\xfelfs-ts.spring8.or.jp\\share\\SCM');
				break;

			case 24:
				System.Shell.execute('explorer.exe', 'C:\\Users\\kenic\\OneDrive\\Desktop\\ランチ');
				break;
			case 25:
				break;
			case 26:
				System.Shell.execute('explorer.exe', '\\\\saclaoprfs01.spring8.or.jp\\log_note\\SACLA\\operation_log\\'+ currentYear);
				break;

			case 27:
				System.Shell.execute('C:\\me\\bin\\open_note.exe', 'SACLA 0');
				break;
			case 28:
				System.Shell.execute('C:\\me\\bin\\open_note.exe', 'SCSS 0');
				break;
			case 29:
				System.Shell.execute('C:\\me\\bin\\open_note.exe', 'SP8 0');
				break;

			case 30:
				System.Shell.execute('C:\\me\\bin\\open_note.exe', 'SACLA 1');
				break;
			case 31:
				System.Shell.execute('C:\\me\\bin\\open_note.exe', 'SCSS 1');
				break;
			case 32:
				System.Shell.execute('C:\\me\\bin\\open_note.exe', 'SP8 1');
				break;

			case 33:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\common\\SACLA朝ミーティング資料\\' + currentYear + '_acc');
				break;
			case 34:
				break;
			case 35:
				System.Shell.execute('explorer.exe', '\\\\sesaccfs2\\operation\\加速器情報\\朝ミーティング報告事項\\' + currentYear);
				break;

			default:
//				System.Shell.execute('notepad.exe', System.Gadget.path + '\\main.html');  
		}
    }
