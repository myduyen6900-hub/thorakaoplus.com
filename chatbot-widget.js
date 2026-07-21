/* =========================================================================
   THORAKAO CHATBOT WIDGET
   Self-contained: injects its own floating bubble, chat panel, and CSS.
   Add <script src="./chatbot-data.js"></script> and
   <script src="./chatbot-widget.js"></script> near the bottom of any page
   (after main.js) and the widget appears — no style.css edits needed,
   no other file needs to change.
   ========================================================================= */
(function () {
  const DATA = window.THORAKAO_CHATBOT;
  if (!DATA) {
    console.warn('Thorakao chatbot: chatbot-data.js not loaded, widget disabled.');
    return;
  }

  // ---------- inject styles ----------
  const style = document.createElement('style');
  style.textContent = `
    .tk-chat-bubble{
      position:fixed; right:20px; bottom:20px; z-index:200;
      width:56px; height:56px; border-radius:50%; border:none; cursor:pointer;
      background:var(--ink); color:var(--cream); font-family:var(--display);
      display:flex; align-items:center; justify-content:center; font-size:22px;
      box-shadow:0 12px 28px -10px rgba(53,88,114,0.5);
      transition:transform .15s ease;
    }
    .tk-chat-bubble:hover{transform:scale(1.06);}
    .tk-chat-panel{
      position:fixed; right:20px; bottom:88px; z-index:200;
      width:340px; max-width:calc(100vw - 40px); height:460px; max-height:calc(100vh - 140px);
      background:var(--cream); border:1px solid var(--line); border-radius:10px;
      box-shadow:0 24px 60px -20px rgba(53,88,114,0.45);
      display:none; flex-direction:column; overflow:hidden;
      font-family:var(--body);
    }
    .tk-chat-panel.open{display:flex;}
    .tk-chat-head{
      background:var(--ink); color:var(--cream); padding:14px 16px;
      display:flex; align-items:center; justify-content:space-between;
    }
    .tk-chat-head strong{font-family:var(--display); font-weight:600; font-size:14.5px;}
    .tk-chat-head span{font-size:11px; color:rgba(247,248,240,0.7); display:block; margin-top:2px;}
    .tk-chat-close{background:none; border:none; color:var(--cream); font-size:18px; cursor:pointer; line-height:1;}
    .tk-chat-body{flex:1; overflow-y:auto; padding:14px; display:flex; flex-direction:column; gap:10px;}
    .tk-msg{max-width:85%; padding:9px 12px; border-radius:10px; font-size:13.5px; line-height:1.5;}
    .tk-msg.bot{background:var(--paper); border:1px solid var(--line); color:var(--ink); align-self:flex-start; border-bottom-left-radius:2px;}
    .tk-msg.user{background:var(--ink); color:var(--cream); align-self:flex-end; border-bottom-right-radius:2px;}
    .tk-quick-replies{display:flex; flex-wrap:wrap; gap:6px; margin-top:2px;}
    .tk-quick-replies button{
      font-family:var(--mono); font-size:11px; letter-spacing:.02em;
      border:1px solid var(--line); background:var(--cream); color:var(--ink);
      border-radius:20px; padding:6px 12px; cursor:pointer; transition:background .15s ease, border-color .15s ease;
    }
    .tk-quick-replies button:hover{background:var(--sky); border-color:var(--sky);}
    .tk-chat-input-row{display:flex; border-top:1px solid var(--line); padding:10px;}
    .tk-chat-input-row input{
      flex:1; border:1px solid var(--line); border-radius:20px; padding:9px 14px;
      font-family:var(--body); font-size:13.5px; background:var(--paper); color:var(--ink);
    }
    .tk-chat-input-row button{
      margin-left:8px; border:none; background:var(--ink); color:var(--cream);
      border-radius:50%; width:36px; height:36px; cursor:pointer; font-size:14px; flex:none;
    }
    @media(max-width:480px){
      .tk-chat-panel{right:12px; left:12px; width:auto; bottom:84px;}
      .tk-chat-bubble{right:16px; bottom:16px;}
    }
  `;
  document.head.appendChild(style);

  // ---------- inject markup ----------
  const bubble = document.createElement('button');
  bubble.className = 'tk-chat-bubble';
  bubble.setAttribute('aria-label', 'Mở trợ lý Thorakao');
  bubble.innerHTML = '💬';

  const panel = document.createElement('div');
  panel.className = 'tk-chat-panel';
  panel.innerHTML = `
    <div class="tk-chat-head">
      <div>
        <strong>Trợ lý Thorakao+</strong>
        <span>Thường trả lời ngay</span>
      </div>
      <button class="tk-chat-close" aria-label="Đóng">✕</button>
    </div>
    <div class="tk-chat-body" id="tkChatBody"></div>
    <div class="tk-chat-input-row">
      <input type="text" id="tkChatInput" placeholder="Nhập câu hỏi của bạn...">
      <button id="tkChatSend" aria-label="Gửi">→</button>
    </div>
  `;

  document.body.appendChild(bubble);
  document.body.appendChild(panel);

  const body = panel.querySelector('#tkChatBody');
  const input = panel.querySelector('#tkChatInput');
  const sendBtn = panel.querySelector('#tkChatSend');
  const closeBtn = panel.querySelector('.tk-chat-close');

  function addMessage(text, who) {
    const el = document.createElement('div');
    el.className = 'tk-msg ' + who;
    el.textContent = text;
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
    return el;
  }

  function addQuickReplies(options, onPick) {
    const wrap = document.createElement('div');
    wrap.className = 'tk-quick-replies';
    options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = opt.label;
      btn.addEventListener('click', () => onPick(opt));
      wrap.appendChild(btn);
    });
    body.appendChild(wrap);
    body.scrollTop = body.scrollHeight;
  }

  function showTopicMenu() {
    addQuickReplies(
      DATA.groups.map((g) => ({ label: g.label, group: g })),
      (opt) => {
        addMessage(opt.label, 'user');
        showQuestionMenu(opt.group);
      }
    );
  }

  function showQuestionMenu(group) {
    addQuickReplies(
      group.questions.map((q) => ({ label: q.question, q })),
      (opt) => {
        addMessage(opt.q.question, 'user');
        addMessage(opt.q.answer, 'bot');
        setTimeout(showTopicMenu, 250);
      }
    );
  }

  function matchQuestion(text) {
    const norm = text.toLowerCase();
    let best = null;
    let bestScore = 0;
    DATA.groups.forEach((g) => {
      g.questions.forEach((q) => {
        let score = 0;
        q.keywords.forEach((kw) => {
          if (norm.includes(kw.toLowerCase())) score += kw.length;
        });
        if (score > bestScore) {
          bestScore = score;
          best = q;
        }
      });
    });
    return bestScore > 0 ? best : null;
  }

  function handleUserText(text) {
    if (!text.trim()) return;
    addMessage(text, 'user');
    input.value = '';

    if (/chào|hi\b|hello/i.test(text)) {
      addMessage(DATA.greeting, 'bot');
      setTimeout(showTopicMenu, 250);
      return;
    }

    const match = matchQuestion(text);
    if (match) {
      addMessage(match.answer, 'bot');
    } else {
      addMessage(DATA.fallback, 'bot');
      setTimeout(showTopicMenu, 250);
    }
  }

  sendBtn.addEventListener('click', () => handleUserText(input.value));
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleUserText(input.value);
  });

  let started = false;
  bubble.addEventListener('click', () => {
    panel.classList.toggle('open');
    if (panel.classList.contains('open') && !started) {
      started = true;
      addMessage(DATA.greeting, 'bot');
      showTopicMenu();
    }
  });
  closeBtn.addEventListener('click', () => panel.classList.remove('open'));
})();
