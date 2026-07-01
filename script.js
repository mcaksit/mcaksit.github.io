const bootLines = [
  'Performing portfolio hardware checks...',
  'ROLE: Software Engineer',
  'PROFESSIONAL EXPERIENCE: 3+ years confirmed',
  'Loading Java Runtime... OK',
  'Starting Spring Boot service layer... OK',
  'Connecting PostgreSQL datasource... OK',
  'Mounting Docker workspace... OK',
  'Scanning 3+ years of professional experience... OK',
  'Loading Arizona State University profile... OK',
  'Job Search Mode: ACTIVE — Remote Java Backend opportunities',
  'Launching MehmetOS Desktop...'
];

const data = {
  about: {
    title: 'About Mehmet',
    html: `<h3>Hi, I'm Mehmet.</h3>
      <p>I'm a Software Engineer currently pursuing an <strong>M.S. in Software Engineering at Arizona State University</strong>.</p>
      <p>I have <strong>3+ years of professional experience</strong> building Java backend applications, distributed systems, autonomous systems, geospatial software, and test automation infrastructure.</p>
      <p class="hero-status">Actively Seeking Remote Java Backend Opportunities</p>
      <div class="stat-row"><span><strong>3+ yrs</strong><small>Professional Experience</small></span><span><strong>Java</strong><small>Backend Focus</small></span><span><strong>ASU</strong><small>M.S. Software Engineering</small></span></div>`
  },
  experience: {
    title: 'Experience',
    html: `<h3>Professional Experience</h3>
    <div class="experience-summary">
      <strong>3+ Years of Professional Software Engineering Experience</strong>
      <span>Java Backend • Distributed Systems • Autonomous Systems • Geospatial Software • Test Automation</span>
    </div>
    <div class="grid">
      <div class="card"><h4>HAVELSAN — Distributed Systems & Middleware</h4><p class="duration">Aug 2024 – Sep 2025 • ~1 year 2 months</p><p>DDS protocol research, integration, test automation, Dockerized Red Hat environments, and middleware engineering.</p></div>
      <div class="card"><h4>HAVELSAN — Backend & Geospatial Systems</h4><p class="duration">Dec 2023 – Jun 2024 • ~7 months</p><p>Java Spring Boot backend, PostgreSQL/PostGIS, Docker, maritime intelligence workflows, Selenium and Python data pipelines.</p></div>
      <div class="card"><h4>HAVELSAN — Autonomous Surface Vehicle Systems</h4><p class="duration">Sep 2022 – Nov 2023 • ~1 year 3 months</p><p>ROS2, Nav2, C/C++, Python, simulation, navigation, obstacle avoidance, and Java/C++ integration through JNI.</p></div>
      <div class="card"><h4>HAVELSAN — Candidate Software Engineer</h4><p class="duration">Mar 2022 – Sep 2022 • ~7 months</p><p>Autonomous systems research, SLAM, NMEA 2000 / NMEA 0183 decoders, SocketCAN, and Unity-based simulation.</p></div>
      <div class="card"><h4>ASELSAN / TEI — Software Internships</h4><p class="duration">2020 & 2021 • Internship experience</p><p>Web applications using Angular, JavaScript, C#, .NET Core, and database-backed internal tools.</p></div>
    </div>`
  },
  education: {
    title: 'Education',
    html: `<h3>Education</h3><div class="list">
      <div class="card"><h4>Arizona State University</h4><p>Master of Science in Computer Software Engineering</p><p>Tempe, Arizona, USA</p></div>
      <div class="card"><h4>Sabanci University</h4><p>Bachelor of Science in Computer Science and Engineering</p><p>Istanbul, Turkey</p></div>
    </div>`
  },
  projects: {
    title: 'Projects',
    html: `<h3>Projects Explorer</h3><div class="grid">
      <div class="card"><h4>TRITON Maritime Intelligence Backend</h4><p>Spring Boot, PostgreSQL, PostGIS, Docker, geospatial data workflows.</p></div>
      <div class="card"><h4>SANCAR ASV Systems</h4><p>Autonomous surface vehicle software, ROS2, Nav2, C++, Python, simulation.</p></div>
      <div class="card"><h4>E-Commerce Backend</h4><p>RESTful backend application built with Python and Django.</p></div>
      <div class="card"><h4>Secure Chat Application</h4><p>Encrypted console chat application using Signal Protocol concepts.</p></div>
      <div class="card"><h4>Job Satisfaction Estimator</h4><p>Machine learning project using real-world Kaggle data.</p></div>
    </div>`
  },
  skills: {
    title: 'Skills',
    html: `<h3>Technical Skills</h3><div class="grid">
      <div class="card"><h4>Backend</h4><p>Java, Spring Boot, REST APIs, PostgreSQL, PostGIS, Docker, Maven</p></div>
      <div class="card"><h4>Systems</h4><p>C, C++, Linux, ROS2, Nav2, DDS, FastDDS, SocketCAN, JNI</p></div>
      <div class="card"><h4>Testing & Tooling</h4><p>JUnit, Mockito, Git, Bash, Jira, Selenium, Make, CMake</p></div>
      <div class="card"><h4>Data / Other</h4><p>Python, Pandas, NumPy, QGIS, Django, Angular, C#, .NET Core</p></div>
    </div>`
  },
  contact: {
    title: 'Contact',
    html: `<h3>Contact</h3><div class="list">
      <div class="card"><h4>Email</h4><p><a href="mailto:mehmetcaksit@gmail.com">mehmetcaksit@gmail.com</a></p></div>
      <div class="card"><h4>GitHub</h4><p><a href="https://github.com/mcaksit" target="_blank" rel="noreferrer">github.com/mcaksit</a></p></div>
      <div class="card"><h4>LinkedIn</h4><p><a href="https://linkedin.com/in/mehmet-aksit" target="_blank" rel="noreferrer">linkedin.com/in/mehmet-aksit</a></p></div>
    </div>`
  }
};

const bootLog = document.querySelector('#bootLog');
const enterBtn = document.querySelector('#enterBtn');
let lineIndex = 0;
function typeBoot(){
  if(lineIndex < bootLines.length){
    const div = document.createElement('div');
    div.textContent = bootLines[lineIndex++];
    bootLog.appendChild(div);
    setTimeout(typeBoot, 280);
  } else enterBtn.classList.remove('hidden');
}
typeBoot();
function launch(){ document.querySelector('#boot').classList.add('hidden'); document.querySelector('#desktop').classList.remove('hidden'); openWindow('about'); }
enterBtn.addEventListener('click', launch);
window.addEventListener('keydown', e => { if(!document.querySelector('#boot').classList.contains('hidden') && e.key === 'Enter') launch(); });

const windows = document.querySelector('#windows');
const template = document.querySelector('#windowTemplate');
let z = 5, offset = 0;
function openWindow(id){
  if(id === 'terminal') return openTerminal();
  if(id === 'snake') return openSnake();
  const item = data[id]; if(!item) return;
  createWindow(item.title, item.html, id);
}
function createWindow(title, html, id){
  const node = template.content.firstElementChild.cloneNode(true);
  node.dataset.app = id;
  node.style.left = `${150 + offset}px`; node.style.top = `${80 + offset}px`; node.style.zIndex = ++z; offset = (offset + 26) % 130;
  node.querySelector('.window-title').textContent = title;
  node.querySelector('.window-content').innerHTML = html;
  node.querySelector('.close').onclick = () => { node.remove(); updateRunning(); };
  node.addEventListener('mousedown', () => node.style.zIndex = ++z);
  makeDraggable(node);
  windows.appendChild(node); updateRunning();
  return node;
}
function makeDraggable(win){
  const bar = win.querySelector('.window-bar'); let down=false, sx=0, sy=0, ox=0, oy=0;
  bar.addEventListener('mousedown', e => { down=true; sx=e.clientX; sy=e.clientY; ox=win.offsetLeft; oy=win.offsetTop; });
  window.addEventListener('mousemove', e => { if(!down) return; win.style.left = `${ox + e.clientX - sx}px`; win.style.top = `${oy + e.clientY - sy}px`; });
  window.addEventListener('mouseup', () => down=false);
}
function updateRunning(){
  const bar = document.querySelector('#runningApps'); bar.innerHTML='';
  [...windows.children].forEach(w => { const b=document.createElement('button'); b.className='app-pill'; b.textContent=w.querySelector('.window-title').textContent; b.onclick=()=>w.style.zIndex=++z; bar.appendChild(b); });
}

document.querySelectorAll('[data-open]').forEach(btn => btn.addEventListener('click', () => { openWindow(btn.dataset.open); document.querySelector('#startMenu').classList.add('hidden'); }));
document.querySelector('#startBtn').onclick = () => document.querySelector('#startMenu').classList.toggle('hidden');
function tick(){ document.querySelector('#clock').textContent = new Intl.DateTimeFormat('en-US',{timeZone:'America/Phoenix',hour:'2-digit',minute:'2-digit',weekday:'short'}).format(new Date()); }
setInterval(tick,1000); tick();

const menu = document.querySelector('#contextMenu');
document.addEventListener('contextmenu', e => { e.preventDefault(); menu.style.left=e.clientX+'px'; menu.style.top=e.clientY+'px'; menu.classList.remove('hidden'); });
document.addEventListener('click', () => menu.classList.add('hidden'));
document.querySelector('#refreshDesktop').onclick = () => location.reload();

function openTerminal(){
  const html = `<h3>Terminal</h3><div class="terminal-screen" id="termOut">MehmetOS Terminal\nType 'help' to list commands.\n\nvisitor@mehmet:~$ </div><input id="termInput" class="terminal-input" autocomplete="off" placeholder="Type a command and press Enter" />`;
  const win = createWindow('Terminal', html, 'terminal');
  const out = win.querySelector('#termOut'); const input = win.querySelector('#termInput'); input.focus();
  const commands = {
    help:'about | experience | projects | skills | education | contact | github | linkedin | hire | coffee | clear',
    about:'Mehmet C. Aksit — Software Engineer, M.S. Software Engineering @ Arizona State University, 3+ years professional experience, actively seeking Remote Java Backend roles.',
    experience:'3+ years professional software engineering experience across Java backend, distributed systems, geospatial software, autonomous systems, and Dockerized test automation.',
    projects:'TRITON backend, SANCAR ASV systems, E-Commerce Backend, Secure Chat, Job Satisfaction Estimator.',
    skills:'Java, Spring Boot, PostgreSQL, Docker, C/C++, Python, Linux, JUnit, Mockito, ROS2, Git.',
    education:'Arizona State University — M.S. Software Engineering. Sabanci University — B.S. Computer Science and Engineering.',
    contact:'Email: mehmetcaksit@gmail.com | GitHub: github.com/mcaksit | LinkedIn: linkedin.com/in/mehmet-aksit',
    github:'Opening GitHub...', linkedin:'Opening LinkedIn...', hire:'Thank you for your interest. Mehmet is actively seeking Remote Java Backend Engineer / Developer opportunities.', coffee:'☕ +20 productivity. Spring Boot service refreshed.'
  };
  input.addEventListener('keydown', e => { if(e.key !== 'Enter') return; const cmd=input.value.trim().toLowerCase(); input.value=''; if(cmd==='clear'){out.textContent='visitor@mehmet:~$ '; return;} out.textContent += cmd+'\n'+(commands[cmd] || `Command not found: ${cmd}`)+'\n\nvisitor@mehmet:~$ '; out.scrollTop=out.scrollHeight; if(cmd==='github') window.open('https://github.com/mcaksit','_blank'); if(cmd==='linkedin') window.open('https://linkedin.com/in/mehmet-aksit','_blank'); });
}

function openSnake(){
  const html = `<h3>Snake.exe</h3><canvas id="snakeCanvas" width="420" height="420"></canvas><div class="snake-controls"><button class="primary" id="snakeStart">Start / Restart</button><span id="snakeScore">Score: 0</span><span id="snakeHigh">High: ${localStorage.getItem('mehmetosHigh')||0}</span><span>Use arrow keys</span></div>`;
  const win = createWindow('Snake', html, 'snake');
  const canvas = win.querySelector('#snakeCanvas'), ctx = canvas.getContext('2d');
  const scoreEl = win.querySelector('#snakeScore'), highEl = win.querySelector('#snakeHigh');
  let snake, food, dir, score, timer;
  function reset(){ snake=[{x:10,y:10}]; food={x:5,y:5}; dir={x:1,y:0}; score=0; clearInterval(timer); timer=setInterval(step,115); draw(); }
  function draw(){ ctx.fillStyle='#020611'; ctx.fillRect(0,0,420,420); ctx.fillStyle='#5ee7ff'; snake.forEach(p=>ctx.fillRect(p.x*20+1,p.y*20+1,18,18)); ctx.fillStyle='#48f2a8'; ctx.fillRect(food.x*20+1,food.y*20+1,18,18); scoreEl.textContent='Score: '+score; }
  function step(){ const head={x:snake[0].x+dir.x,y:snake[0].y+dir.y}; if(head.x<0||head.y<0||head.x>20||head.y>20||snake.some(p=>p.x===head.x&&p.y===head.y)){ clearInterval(timer); return; } snake.unshift(head); if(head.x===food.x&&head.y===food.y){ score+=10; food={x:Math.floor(Math.random()*21),y:Math.floor(Math.random()*21)}; const high=Math.max(Number(localStorage.getItem('mehmetosHigh')||0),score); localStorage.setItem('mehmetosHigh',high); highEl.textContent='High: '+high; } else snake.pop(); draw(); }
  window.addEventListener('keydown', e => { if(e.key==='ArrowUp'&&dir.y!==1)dir={x:0,y:-1}; if(e.key==='ArrowDown'&&dir.y!==-1)dir={x:0,y:1}; if(e.key==='ArrowLeft'&&dir.x!==1)dir={x:-1,y:0}; if(e.key==='ArrowRight'&&dir.x!==-1)dir={x:1,y:0}; });
  win.querySelector('#snakeStart').onclick=reset; reset();
}
