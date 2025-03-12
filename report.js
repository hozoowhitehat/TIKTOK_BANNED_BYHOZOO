const axios = require('axios');
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadFile('index.html');
});

ipcMain.on('start-reporting', (event, url) => {
    const defaultHeaders = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 OPR/100.0.0.0",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 OPR/100.0.0.0",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 OPR/100.0.0.0",
        "Mozilla/5.0 (Linux; Android 12; SM-G993U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 12; SM-G998U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 12; SM-G992U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Mobile Safari/537.36",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/16A5367e Safari/604.1",
        "Mozilla/5.0 (iPad; CPU iPadOS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/16A5367e Safari/604.1",
        "Mozilla/5.0 (iPod touch; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/16A5367e Safari/604.1",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_0_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Safari/537.36 Edg/103.0.5005.115",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Safari/537.36 Vivaldi/6.1.3035.257",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Brave/1.43.120",
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Safari/537.36 EdgHTML/103.0.5005.115",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko",
        "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)",
        "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)",
        "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)",
        "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
        "Mozilla/5.0 (Linux; Android 12; SM-G993U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 12; SM-G998U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 12; SM-G992U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Mobile Safari/537.36",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/16A5367e Safari/604.1",
        "Mozilla/5.0 (iPad; CPU iPadOS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/16A5367e Safari/604.1",
        "Mozilla/5.0 (iPod touch; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/16A5367e Safari/604.1",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_0_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Safari/537.36 Edg/103.0.5005.115",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Safari/537.36 Vivaldi/6.1.3035.257",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5005.115 Brave/1.43.120"
    ];

    const acceptLanguages = [
        "en-US,en;q=0.9",
        "en-GB,en;q=0.8",
        "fr-FR,fr;q=0.9",
        "es-ES,es;q=0.9",
        "de-DE,de;q=0.9",
        "it-IT,it;q=0.9",
        "pt-PT,pt;q=0.9",
        "nl-NL,nl;q=0.9",
        "sv-SE,sv;q=0.9",
        "no-NO,no;q=0.9",
        "da-DK,da;q=0.9",
        "fi-FI,fi;q=0.9",
        "pl-PL,pl;q=0.9",
        "ru-RU,ru;q=0.9",
        "tr-TR,tr;q=0.9",
        "ja-JP,ja;q=0.9",
        "ko-KR,ko;q=0.9",
        "zh-CN,zh;q=0.9",
        "ar-SA,ar;q=0.9",
        "hi-IN,hi;q=0.9",
        "he-IL,he;q=0.9",
        "th-TH,th;q=0.9",
        "vi-VN,vi;q=0.9",
        "id-ID,id;q=0.9",
        "ms-MY,ms;q=0.9",
        "fil-PH,fil;q=0.9",
        "cs-CZ,cs;q=0.9",
        "hu-HU,hu;q=0.9",
        "el-GR,el;q=0.9",
        "uk-UA,uk;q=0.9",
        "ro-RO,ro;q=0.9",
        "hr-HR,hr;q=0.9",
        "sr-RS,sr;q=0.9",
        "bg-BG,bg;q=0.9",
        "sk-SK,sk;q=0.9",
        "sl-SI,sl;q=0.9",
        "et-EE,et;q=0.9",
        "lv-LV,lv;q=0.9",
        "lt-LT,lt;q=0.9"
    ];

    const otherHeaders = {
        "Referer": "https://www.google.com/",
        "Connection": "keep-alive",
        "DNT": "1",
        "Upgrade-Insecure-Requests": "1",
        "Cache-Control": "max-age=0",
        "TE": "Trailers"
    };

    let totalReports = 0;
    let reportsPerSecond = 0;
    let lastReportTime = Date.now();

    const report = async () => {
        while (true) {
            const userAgent = defaultHeaders[Math.floor(Math.random() * defaultHeaders.length)];
            const acceptLanguage = acceptLanguages[Math.floor(Math.random() * acceptLanguages.length)];
            const headers = {
                "User-Agent": userAgent,
                "Accept-Language": acceptLanguage,
                ...otherHeaders,
            };

            try {
                const response = await axios.post(url, {}, { headers });
                if (response.status === 200) {
                    totalReports++;
                    reportsPerSecond = totalReports / ((Date.now() - lastReportTime) / 1000);
                    lastReportTime = Date.now();

                    const outputText = `[+] Reports sent: ${totalReports} (${reportsPerSecond.toFixed(2)} reports/min) Current User-Agent: ${userAgent} Current Accept-Language: ${acceptLanguage}`;
                    mainWindow.webContents.send('update-output', outputText);
                } else {
                    mainWindow.webContents.send('update-output', '[-] Report failed');
                }
            } catch (error) {
                mainWindow.webContents.send('update-output', '[-] Report failed');
            }

            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before next report
        }
    };

    report();
});
