    function init() {
      var oBackground = document.getElementById("imgBackground");
      oBackground.src = "url(logo.png)";
      System.Gadget.Flyout.file = "flyout.html";
    }
    function showFlyout() {
      System.Gadget.Flyout.show = true;
    }
    function exe(n) {
      	switch (n){
			case 0:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\common');
				break;
			case 1:
//				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\common\\マニュアルNEW');
				System.Shell.execute('\\\\saclaopr18.spring8.or.jp\\common\\マニュアルNEW\\マニュアルリストNEW.xlsm');
				break;
			case 2:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\ses-users\\jkenichi');
				break;
			case 3:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\common\\冷却水関係');
				break;
			case 4:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\common\\シフト\\2024年度');
				break;				
			case 5:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\common\\各種原紙');
				break;
			case 6:
//				System.Shell.execute('\\\\saclaopr18.spring8.or.jp\\shared\\SACLA_Tuning_Data\\gun_fault_summary\\gun_spark_check.xlsx');
				System.Shell.execute('http://calsrv01.spring8.or.jp/cal/');
				break;
			case 7:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\common\\故障交換履歴\\');
				break;
			case 8:
//				System.Shell.execute('explorer.exe', '\\\\saclaopr18\\shared\\SACLA_Tuning_Data');
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\shared\\SACLA_Tuning_Data');
				
				break;				
			case 9:
				System.Shell.execute('explorer.exe', '\\\\xfelfs-ts.spring8.or.jp\\share\\svoc-work');
				break;
			case 10:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\common\\電荷積算記録');
				break;
			case 11:
				System.Shell.execute('http://saclaopr18.spring8.or.jp/~moniwin3/output_intlk_SACLA/date/date.xml');
//				System.Shell.execute('http://saclaopr18.spring8.or.jp/~moniwin3/output_intlk/date/date.xml');				
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
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\common\\作業報告\\作業報告書');
				break;
			case 17:
				System.Shell.execute('http://saclaopr19.spring8.or.jp/~summary/display_ui.html');
				break;
			case 18:
				System.Shell.execute('http://qrserver/');
				break;
			case 19:
				System.Shell.execute('http://weathernews.jp/map/#//c=55');
				break;
			case 20:
				System.Shell.execute('http://yahoo.jp/7hwTUd');
				break;
			case 21:
				System.Shell.execute('explorer.exe', '\\\\saclaoprfs01.spring8.or.jp\\log_note\\SACLA\\operation_log\\2024');
				break;
			case 22:
				System.Shell.execute('explorer.exe', '\\\\saclaopr18.spring8.or.jp\\shared\\SS\\Moniwin3');
				break;				
			case 23:
				System.Shell.execute('explorer.exe', '\\\\xfelfs-ts.spring8.or.jp\\share\\SCM');
				break;
			default:
//				System.Shell.execute('notepad.exe', System.Gadget.path + '\\main.html');  
		}
    }





























    function Excute(n) {
      	switch (n){
			case 0:
				System.Shell.execute('C:\\me\\Dropbox\\Public\\Clip\\Clip.exe');
				break;
			default:
				System.Shell.execute('C:\\me\\Dropbox\\Public\\Clip\\Clip.exe');
		}
    }

    function Link(n) {
      	switch (n){
			default:
				System.Shell.execute('https://www');
		}
    }

    function LinkE(n) {
      	switch (n){
			default:
				System.Shell.execute('https://www');
		}
    }
    
    