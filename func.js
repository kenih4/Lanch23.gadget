// 設定は config.js (CONFIG) から読み込みます

function init() {
    var oBackground = document.getElementById("imgBackground");
    if (oBackground) {
        oBackground.src = "icon.png";
    }
    System.Gadget.Flyout.file = "main.html";
    buildButtons();
}

function showFlyout() {
    System.Gadget.Flyout.show = true;
}

// config.js の buttons からボタンを生成
function buildButtons() {
    var html = [];
    for (var i = 0; i < CONFIG.buttons.length; i++) {
        var b = CONFIG.buttons[i];
        html.push('<input type="button" class="btn_' + b.cls + '" onclick="exe(' + i + ');" value="' + escapeAttr(b.label) + '"/>');
    }
    document.getElementById("buttons").innerHTML = html.join("\n");
}

function escapeAttr(s) {
    return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

// {名前} を変数で置換 (変数の中の変数も展開)
function expand(s, vars) {
    for (var n = 0; n < 3; n++) {
        s = s.replace(/\{(\w+)\}/g, function (m, k) {
            return (vars[k] !== undefined) ? vars[k] : m;
        });
    }
    return s;
}

// CONFIG.vars + 日付変数
function getVars() {
    var now = new Date();
    var year = now.getFullYear();
    var fy = (now.getMonth() >= 3) ? year : year - 1; // 年度(4月始まり)
    var v = {};
    for (var k in CONFIG.vars) {
        v[k] = CONFIG.vars[k];
    }
    v.year = String(year);
    v.fy = String(fy);
    v.reiwa = ("0" + (fy - 2018)).slice(-2);
    return v;
}

function toWinPath(p) {
    return p.replace(/\//g, "\\");
}

function exe(n) {
    var btn = CONFIG.buttons[n];
    if (!btn) {
        return;
    }
    var vars = getVars();
    for (var i = 0; i < btn["do"].length; i++) {
        var a = btn["do"][i];
        if (a.folder) {
            System.Shell.execute("explorer.exe", toWinPath(expand(a.folder, vars)));
        } else if (a.url) {
            if (a.browser) {
                System.Shell.execute(toWinPath(expand(a.browser, vars)), expand(a.url, vars));
            } else {
                System.Shell.execute(expand(a.url, vars));
            }
        } else if (a.run) {
            var target = toWinPath(expand(a.run, vars));
            if (a.args) {
                System.Shell.execute(target, expand(a.args, vars));
            } else {
                System.Shell.execute(target);
            }
        }
    }
}
