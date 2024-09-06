(function() {
    var notepad = document.createElement('div');
    notepad.setAttribute('style', 'position:fixed;top:10%;left:10%;width:346px;height:217px;background:white;z-index:10000;border:2px solid black;box-shadow:0 0 10px rgba(0,0,0,0.5);padding:10px;overflow:auto;resize:both;font-family:Arial,sans-serif;');
    var header = document.createElement('div');
    header.setAttribute('style', 'width:100%;height:30px;background:#ccc;cursor:move;position:absolute;top:0;left:0;font-size:16px;line-height:30px;padding-left:10px;box-sizing:border-box;');
    header.innerHTML = '<b>Notepad</b>';
    notepad.appendChild(header);
    var textarea = document.createElement('textarea');
    textarea.setAttribute('style', 'width:100%;height:calc(100% - 40px);margin-top:40px;box-sizing:border-box;resize:none;font-size:14px;padding:5px;');
    notepad.appendChild(textarea);
    var closeBtn = document.createElement('button');
    closeBtn.innerHTML = 'X';
    closeBtn.setAttribute('style', 'position:absolute;top:5px;right:5px;width:20px;height:20px;font-size:14px;');
    closeBtn.onclick = function() {
        document.body.removeChild(notepad);
    };
    notepad.appendChild(closeBtn);
    var selectTextBtn = document.createElement('button');
    selectTextBtn.innerHTML = 'CopyText';
    selectTextBtn.setAttribute('style', 'position:absolute;top:5px;right:100px;width:65px;height:20px;font-size:14px;');
    notepad.appendChild(selectTextBtn);
    var minimizeBtn = document.createElement('button');
    minimizeBtn.innerHTML = 'Minimize';
    minimizeBtn.setAttribute('style', 'position:absolute;top:5px;right:28px;width:65px;height:20px;font-size:14px;');
    notepad.appendChild(minimizeBtn);
    var settingsBtn = document.createElement('button');
    settingsBtn.innerHTML = 'Settings';
    settingsBtn.setAttribute('style', 'position:absolute;top:5px;right:168px;width:65px;height:20px;font-size:14px;');
    notepad.appendChild(settingsBtn);
    var settingsPanel = document.createElement('div');
    settingsPanel.setAttribute('style', 'display:none;position:absolute;top:35px;right:0;width:100%;height:100px;background:#eee;border:1px solid #ccc;box-sizing:border-box;padding:10px;');
    settingsPanel.innerHTML = '<p>Settings Panel</p>';
    notepad.appendChild(settingsPanel);
    var btn1 = document.createElement('button');
    btn1.innerHTML = 'Dark Mode';
    btn1.setAttribute('style', 'margin-right:10px;');
    settingsPanel.appendChild(btn1);
    btn1.onclick = function() {
        var elements = document.body.getElementsByTagName('*');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = 'white';
        }
        function getRandomOrange() {
            var shades = ['#0C0E0E', '#0C1010', '#0E1010', '#101111', '#181919'];
            return shades[Math.floor(Math.random() * shades.length)];
        }
        for (var j = 0; j < elements.length; j++) {
            var element = elements[j];
            var bgColor = window.getComputedStyle(element).backgroundColor;
            if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
                element.style.backgroundColor = getRandomOrange();
            }
        }
    };
    var btn2 = document.createElement('button');
    btn2.innerHTML = 'Luke Virus';
    btn2.setAttribute('style', 'margin-right:10px;');
    settingsPanel.appendChild(btn2);
    btn2.onclick = function() {
        var imgs = document.getElementsByTagName('img');
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].src = 'https://cdn.discordapp.com/attachments/1224832137140899930/1265335596801458176/IMG-20240718-WA0012.jpg?ex=66b8355b&is=66b6e3db&hm=2a02e8393a4c7621de54aee42e3f8561f52ab85ebde09de48af7ea9a65a7aed4&';
        }
        function getRandomOrange() {
            var shades = ['#FFA500', '#FF8C00', '#FF7F50', '#FF6347', '#FF4500'];
            return shades[Math.floor(Math.random() * shades.length)];
        }
        var bgImg = 'https://cdn.discordapp.com/attachments/1224832137140899930/1265335596801458176/IMG-20240718-WA0012.jpg?ex=66dbcddb&is=66da7c5b&hm=e68d58f26bc3de61a2686c2cbf438246794571da5a16bbb82573b31a46be9e07&';
        var elements = document.getElementsByTagName('*');
        for (var j = 0; j < elements.length; j++) {
            var element = elements[j];
            var bgColor = window.getComputedStyle(element).backgroundColor;
            if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
                element.style.backgroundColor = getRandomOrange();
            }
            var bgImage = window.getComputedStyle(element).backgroundImage;
            if (bgImage && bgImage !== 'none') {
                element.style.backgroundImage = 'url("' + bgImg + '")';
            }
        }
    };
    var btn3 = document.createElement('button');
    btn3.innerHTML = 'Mod SWA HomePage (broken)';
    settingsPanel.appendChild(btn3);
    btn3.onclick = function() {
        alert("Mod SWA HomePage IS BROKEN, IT WONT WORK");
    };
    settingsBtn.onclick = function() {
        settingsPanel.style.display = settingsPanel.style.display === 'none' ? 'block' : 'none';
    };
    var originalWidth = notepad.style.width;
    var originalHeight = notepad.style.height;
    minimizeBtn.onclick = function() {
        if (textarea.style.display === 'none') {
            textarea.style.display = 'block';
            notepad.style.width = originalWidth;
            notepad.style.height = originalHeight;
            minimizeBtn.innerHTML = 'Minimize';
            notepad.style.resize = 'both';
            selectTextBtn.style.visibility = 'visible';
            settingsBtn.style.visibility = 'visible';
        } else {
            textarea.style.display = 'none';
            originalWidth = notepad.style.width;
            originalHeight = notepad.style.height;
            notepad.style.width = '150px';
            notepad.style.height = '30px';
            minimizeBtn.innerHTML = 'Maximize';
            notepad.style.resize = 'none';
            selectTextBtn.style.visibility = 'hidden';
            settingsBtn.style.visibility = 'hidden';
            settingsPanel.style.display = 'none';
        }
    };
    document.body.appendChild(notepad);
    header.onmousedown = function(e) {
        var offsetX = e.clientX - notepad.getBoundingClientRect().left;
        var offsetY = e.clientY - notepad.getBoundingClientRect().top;
        function mouseMoveHandler(e) {
            notepad.style.left = (e.clientX - offsetX) + 'px';
            notepad.style.top = (e.clientY - offsetY) + 'px';
        }
        function mouseUpHandler() {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };
    var selectingText = false;
    selectTextBtn.onclick = function() {
        selectingText = !selectingText;
        selectTextBtn.style.backgroundColor = selectingText ? 'green' : '';
    };
    document.addEventListener('mouseup', function() {
        if (selectingText) {
            var selectedText = window.getSelection().toString();
            if (selectedText) {
                textarea.value += selectedText + '\n';
                selectTextBtn.style.backgroundColor = '';
                selectingText = false;
            }
        }
    });
})();
