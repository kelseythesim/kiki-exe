'use strict';
// KIKI.EXE final Council Edition. Single executable with simulated DOS directories.
const bootText = `KIKI SYSTEMS [VERSION 1.0]
Copyright (C) 2026 Kiki Systems

C:\\TRTB> KIKI.EXE

INITIALIZING...

PERSONALITY............. LOADED
COMMUNITY CONNECTION.... ESTABLISHED
CONFLICT RESOLUTION..... VERIFYING FILES
PROCESS IMPROVEMENT..... FAILED TO BOOT
                          ALWAYS RUNNING
TASK ALLOCATION......... AWAITING INPUT
DIRECTIONAL DATA........ NOT FOUND

INITIALIZATION COMPLETE.

PRESS ENTER TO CONTINUE_`;
const menuText = `C:\\TRTB> KIKI.EXE

K I K I . E X E
THE HUMAN BEHIND THE CHAOS
--------------------------------

MAIN MENU`;
const entries = [
 ['PROFILE', 'Profile directory ready.'],
 ['HISTORY', 'Six origin-story chapters available.'],
 ['SKILLS', 'Ten skills files available.'],
 ['SIMULATIONS', 'Six branching scenarios available.'],
 ['CLASSIFIED', 'Six personnel records available.'],
 ['COUNCIL APPLICATION', 'Candidate application available.'],
 ['EXIT', 'Program terminated.']
];
const profileFiles = [
 ['INTRO.TXT', `QUESTION: Tell us about yourself.

1. I hate that question.
2. I don't like talking about myself.
3. I'd like to move on.

ERROR: SUBJECT REFUSES TO ELABORATE.
SWITCHING TO DIAGNOSTIC MODE...`],
 ['INTEL.DAT', `EXTERNAL APPEARANCE.... CHAOTIC
INTELLIGENCE........... UNDERESTIMATED
PLAYING DUMB........... EXPERT MODE

NOTICE: DO NOT CONFUSE SILLINESS
WITH LACK OF INTELLIGENCE.`],
 ['PERSIST.LOG', `SERVICE RECORD......... U.S. ARMY
TRAINING STATUS........ GRADUATED

Subject wanted to quit basic training
many times, but kept going.

QUIT COMMAND........... NOT EXECUTED`],
 ['BRAIN.DAT', `QUESTION FREQUENCY.... HIGH
INTENT................ UNDERSTANDING
CONFLICT RESOLUTION... VERIFYING FILES
PROCESS IMPROVEMENT... ALWAYS RUNNING

WHY? IS A REQUEST FOR INFORMATION,
NOT A DECLARATION OF WAR.

DIRECT COMMUNICATION DOES NOT
INDICATE A LACK OF CARE.`],
 ['BUGS.LOG', `IDEA GENERATION....... ACTIVE
EXECUTION QUEUE....... BACKLOGGED

WARNING: ADDITIONAL IDEAS DETECTED
BEFORE PRIOR TASKS COMPLETED.

HELP REQUESTS FOR ASSIGNED WORK
MAY BE DELAYED.

PATCH STATUS........... IN PROGRESS`],
 ['TRUST.DAT', `TRUST LEVEL........... VERIFIED
VOLUME CONTROL........ DISABLED
SILLINESS............. MAXIMUM
CHATTER............... UNRESTRICTED
AFFECTION............. USER-SPECIFIC

NO UNIVERSAL CONFIGURATION FOUND.`],
 ['HAPPY.LOG', `STREAMING MODE:
INCOMING RAID DETECTED.
VIEWER COUNT........... IRRELEVANT
APPRECIATION........... MAXIMUM

OUT OF EVERYONE, THEY PICKED ME.

OFFLINE MODE:
HUG DETECTED.
SOURCE: WADE / KIDS
HAPPINESS RESTORED.`],
 ['VALUES.DAT', `LOYALTY............... MAXIMUM
PROTECTIVE INSTINCT.... ENABLED
FACT CHECKING.......... REQUIRED
BLIND ALLEGIANCE....... DISABLED
ACCOUNTABILITY......... UNIVERSAL

BEING LOVED DOES NOT GRANT
IMMUNITY FROM CONSEQUENCES.`]
];
const historyFiles = [
 ['FIRST.DAT', `CHAPTER 01: FIRST CONTACT

USERNAME: hey0kiki
FIRST CONTACT: COWEEF / PHASMOPHOBIA
SUBSCRIPTION STATUS: FIRST SUBSCRIBER

Coweef introduced Kiki to TRTB.

COMMUNITY SIZE........ HUGE
INTIMIDATION........... HIGH
WELCOME MESSAGES...... INCOMING

Everyone said hi and welcomed her in.

ACHIEVEMENT: A PLACE TO BELONG`],
 ['SUPPORT.DAT', `CHAPTER 02: SOMETHING MORE

Kiki's mom became seriously ill.

The TRTB community showed up
with kindness and support.

What once felt enormous and
intimidating became a place
where she felt cared for.

CONNECTION STATUS...... ESTABLISHED`],
 ['KNIGHT.DAT', `CHAPTER 03: KNIGHT UNLOCKED

DATE: JUNE 27, 2026
APPLICATION STATUS..... ACCEPTED
NEW ROLE............... TRTB KNIGHT

PRIDE.................. HIGH
BELONGING.............. CONFIRMED

Kiki felt included and proud to
be part of something special.

ACHIEVEMENT: PART OF SOMETHING SPECIAL`],
 ['COLLAB.DAT', `CHAPTER 04: MULTIPLAYER UNLOCKED

COLLABORATIVE CHAOS: INITIALIZED

ON-STREAM GAMING...... ENABLED
OFF-STREAM GAMING..... ENABLED
LAUGHTER.............. MAXIMUM
SURVIVAL RATE......... QUESTIONABLE

It doesn't matter who's playing
or whether anyone is watching.

Kiki is just happy to be there.

ACHIEVEMENT: BETTER TOGETHER`],
 ['WELCOME.DAT', `CHAPTER 05: PAYING IT FORWARD

NEW MEMBER DETECTED.

KIKI RESPONSE:
"Hey! Welcome in!"

INITIATING CONVERSATION...
> ASK LEADING QUESTIONS

SOCIAL CONNECTION: IN PROGRESS

Kiki remembers being the new person.
She enjoys helping people feel
just as welcome.

ACHIEVEMENT: THE WELCOME COMMITTEE`],
 ['PEOPLE.DAT', `CHAPTER 06: THE RIGHT PEOPLE

DISCOVERY UNLOCKED:

Making friends doesn't have
to be difficult.

Sometimes it's just about
finding the right people
in the right community.

FRIENDSHIP STATUS...... THRIVING
BELONGING.............. CONFIRMED

ACHIEVEMENT: FOUND MY PEOPLE`]
];
const skillsFiles = [
 ['LISTEN.DAT', `INFORMATION GATHERING

APPROACH............... NON-CONFRONTATIONAL
LISTENING.............. ACTIVE
FACT VERIFICATION...... REQUIRED

PEOPLE OFTEN FEEL COMFORTABLE
TALKING TO KIKI.

INPUT RECEIVED.
VERIFYING FILES...`],
 ['SOLVE.DAT', `ACTIVE PROBLEM SOLVING

PROBLEM REPORTED.

LISTENING.............. ACTIVE
SOLUTION SEARCH........ RUNNING
FOLLOW-UP QUESTIONS.... QUEUED

POTENTIAL SOLUTIONS IDENTIFIED.
REQUESTING ADDITIONAL INFORMATION...`],
 ['CONSENT.DAT', `SUPPORT WITHOUT ASSUMPTIONS

PROBLEM DETECTED.
POSSIBLE SOLUTIONS FOUND.

REQUESTING PERMISSION TO ADVISE...

IF APPROVED:
  PROVIDE OPTIONS
ELSE:
  REQUEST SUPPORT REQUIREMENTS

NOT EVERY PROBLEM NEEDS A FIX.`],
 ['BACKUP.DAT', `ADAPTIVE TEAM SUPPORT

TEAM MEMBER OVERLOADED.

CHECKING AVAILABLE SUPPORT OPTIONS...

BACKUP................. AVAILABLE
BODY DOUBLING.......... AVAILABLE
BARRIER ASSESSMENT..... PENDING

AWAITING USER PREFERENCE.
HELP DOES NOT REQUIRE TAKING OVER.`],
 ['HELP.LOG', `HELP REQUEST PROTOCOL

UNKNOWN TASK........... ASK
UNCLEAR AUTHORITY...... CLARIFY
ASSIGNED TASK.......... SELF-RELIANCE MODE

WORKLOAD INCREASING...
WARNING: HELP REQUEST MAY BE DELAYED.

PATCH STATUS............ IN PROGRESS`],
 ['PATCH.LOG', `CONSTRUCTIVE FEEDBACK HANDLER

FEEDBACK RECEIVED.

> ACKNOWLEDGE
> IDENTIFY CORRECTION
> APPLY PATCH
> RESUME OPERATIONS

PATCH APPLIED SUCCESSFULLY.

INVALID OR UNCLEAR INPUT MAY
TRIGGER FOLLOW-UP QUESTIONS.`],
 ['TEAM.DAT', `FLEXIBLE TEAMWORK

LEADERSHIP SUPPORT...... ACTIVE
ROLE FLEXIBILITY........ ENABLED
TEAM OBJECTIVES......... PRIORITIZED

PREFERRED ASSIGNMENT:
WHEREVER SUPPORT IS NEEDED.

AWAITING TASK ALLOCATION...`],
 ['CLARIFY.LOG', `CLARIFICATION PROTOCOL

NEW ASSIGNMENT RECEIVED.
PARSING INSTRUCTIONS...

WARNING: MISSING PARAMETERS.

REQUESTING CLARIFICATION...
REQUESTING ADDITIONAL CLARIFICATION...

PROCESS SUSPENDED.
AWAITING RESPONSE.`],
 ['IDEAS.DAT', `COLLABORATIVE PROBLEM SOLVING

PROPOSAL SUBMITTED.
FEEDBACK RECEIVED: MIXED.

> IDENTIFY CONCERNS
> INVITE DISCUSSION
> EVALUATE FEEDBACK

IF DISCUSSION DECLINED:
  TABLE PROPOSAL

STATUS: AVAILABLE FOR FUTURE REVIEW`],
 ['BOUNCE.DAT', `SOUNDING BOARD

INCOMING IDEA DETECTED.

> LISTEN
> ASK CLARIFYING QUESTIONS
> EXPLORE POSSIBILITIES
> IDENTIFY OBSTACLES
> OFFER FEEDBACK IF REQUESTED

IDEA OWNERSHIP.......... PRESERVED
UNSOLICITED TAKEOVER.... DISABLED

READY FOR NEXT INPUT.`]
];
const simulations = [
 {file:'RUMOR.DAT',title:'THE RUMOR MILL',stages:[
  {body:`SIMULATION 01 / STAGE 01
TRTB — CONFLICT OF INTEREST
--------------------------------
Two Knights report conflicting accounts
of a possible community rule violation.

One Knight is a close friend of Kiki.
Evidence is incomplete.

WHAT SHOULD HAPPEN FIRST?`,choices:[
  ['Investigate without involving Council.','Independent investigation could raise impartiality concerns. Disclose the relationship first.'],
  ['Disclose the friendship and discuss her role.','CONFLICT DISCLOSED. Kiki would explain her hesitation and ask Council whether her participation is appropriate.'],
  ['Trust the friend until proven otherwise.','FRIENDSHIP IS NOT EVIDENCE. Kiki holds friends accountable too.'],
  ['Recommend discipline immediately.','INSUFFICIENT DATA. Kiki wants the facts before recommending consequences.']],correct:1},
  {body:`SIMULATION 01 / STAGE 02
TRTB — COUNCIL REVIEW
--------------------------------
Council knows about the friendship.
Kiki has expressed her hesitation.

Council agrees that she can fairly
participate in reviewing the matter.

WHAT HAPPENS NEXT?`,choices:[
  ['Refuse to participate anyway.','She raised her concerns, but would proceed if Council still considers participation appropriate.'],
  ['Participate and review the evidence.','DECISION ACKNOWLEDGED. Kiki can respect Council and evaluate facts without promising any result.'],
  ['Ask her friend which outcome they want.','The friend does not get to decide the outcome.'],
  ['Promise to defend her friend.','Loyalty does not mean immunity from accountability.']],correct:1}]},
 {file:'KNIGHT.DAT',title:'THE OVERLOADED KNIGHT',stages:[
  {body:`SIMULATION 02 / STAGE 01
TRTB — EVENT SUPPORT
--------------------------------
A Knight organizing a charity raid train
seems overwhelmed by preparation.

Kiki is not the event organizer.

WHAT DOES SHE DO?`,choices:[
  ['Take over the event immediately.','Kiki wants to help, not override the person organizing.'],
  ['Ask whether help is needed in the planning space.','SUPPORT OFFERED. She checks whether help would be useful or whether there is a task she could simplify.'],
  ['Report the Knight for falling behind.','At this stage, an offer of help is more appropriate.'],
  ['Ignore it because the role is assigned.','Kiki will offer assistance without needing to be assigned the problem.']],correct:1},
  {body:`SIMULATION 02 / STAGE 02
TRTB — DEADLINE APPROACHING
--------------------------------
The Knight declined help.

It is Thursday. Several streamers
still have not confirmed time slots.
The raid train schedule is due Friday.

WHAT DOES KIKI DO NEXT?`,choices:[
  ['Quietly edit the schedule herself.','Taking control without permission could create confusion.'],
  ['Keep asking the Knight repeatedly.','The Knight already declined. The growing event risk needs appropriate coordination.'],
  ['Consult Council about whether support is needed.','ESCALATION REQUESTED. Kiki respects the organizer while making sure the event deadline is addressed.'],
  ['Wait until the raid train begins.','That risks leaving too little time to address missing confirmations.']],correct:2}]},
 {file:'BILLING.DAT',title:'THE BILLING DISASTER',stages:[
  {body:`SIMULATION 03 / STAGE 01
WORK — DATA INTEGRITY
--------------------------------
A large invoice is nearly ready when
Kiki discovers incorrect source data.

The invoice deadline is approaching.

WHAT HAPPENS FIRST?`,choices:[
  ['Send it and correct charges next month.','Accuracy matters; sending known incorrect charges is not a solution.'],
  ['Immediately request a week-long extension.','She first checks whether there is a quick, reliable correction.'],
  ['Find the errors and look for an efficient fix.','DIAGNOSTICS STARTED. Kiki first assesses the errors and possible ways to fix them.'],
  ['Delete the invoice and start over.','That may waste effort before the error scope is known.']],correct:2},
  {body:`SIMULATION 03 / STAGE 02
WORK — RATE CORRECTION
--------------------------------
15% of records have incorrect rates.
Someone estimates a two-hour repair.

A bulk Excel correction may be possible,
but the results must be verified.

WHAT IS KIKI'S RESPONSE?`,choices:[
  ['Accept the two-hour estimate without review.','She questions whether available tools can do it more efficiently.'],
  ['Fix only the most visible records.','Partial correction risks incorrect billing.'],
  ['Skip verification to save time.','Verification still matters, even with bulk fixes.'],
  ['Check tools and resources for a faster verified fix.','RESOURCES SCANNED. Kiki challenges the estimate while protecting accuracy.']],correct:3},
  {body:`SIMULATION 03 / STAGE 03
WORK — IMPORT ERROR
--------------------------------
Data is corrected and verified.
QuickBooks rejects the import.

The deadline is getting closer.

WHAT HAPPENS NEXT?`,choices:[
  ['Research the error, then request more time if needed.','TROUBLESHOOTING ACTIVE. Kiki uses available resources and communicates if the deadline is genuinely at risk.'],
  ['Keep retrying the same failed import.','Repeating the same attempt without investigating may not resolve it.'],
  ['Send an invoice with missing records.','An incomplete invoice is not a safe shortcut.'],
  ['Abandon the task until Monday.','She remains responsible for working toward completion and communicating risk.']],correct:0}]},
 {file:'REPORT.DAT',title:'THE MYSTERY ASSIGNMENT',stages:[
  {body:`SIMULATION 04 / STAGE 01
WORK — INCOMPLETE PARAMETERS
--------------------------------
Supervisor: "Put together a report
showing how the department performed
this year. I need it tomorrow."

No source or metric is specified.

WHAT DOES KIKI ASK FIRST?`,choices:[
  ['Where do I access that information?','SOURCE REQUESTED. Kiki first determines where the report data lives.'],
  ['Can I cancel tomorrow\'s meeting?','The missing information can be clarified without avoiding the request.'],
  ['Should I use last year\'s numbers?','She needs to identify the source before using unrelated data.'],
  ['Who should present this report?','First she needs access to the data.']],correct:0},
  {body:`SIMULATION 04 / STAGE 02
WORK — DEFINE SCOPE
--------------------------------
Supervisor: "It's in QuickBooks.
Just show how we're doing."

DATA SOURCE: KNOWN
REPORT METRICS: UNKNOWN

WHAT DOES KIKI ASK NEXT?`,choices:[
  ['Which color should the chart be?','Presentation choices come after defining the actual report.'],
  ['What metrics are you looking for?','PARAMETERS REQUESTED. Kiki clarifies the requested KPIs before doing extra work.'],
  ['Should I include every QuickBooks field?','She avoids pulling unnecessary data.'],
  ['Can we postpone indefinitely?','The assignment is workable once expectations are clarified.']],correct:1},
  {body:`SIMULATION 04 / STAGE 03
WORK — SCOPE VALIDATION
--------------------------------
The supervisor requests revenue,
accounts receivable, and collections
results compared with last year.

A separate tracker contains collection
calls and follow-up activity.

SHOULD IT BE INCLUDED?`,choices:[
  ['Yes, include all activity by default.','The supervisor requested financial outcomes, not collections activity.'],
  ['Ask everyone to rebuild the tracker.','Rebuilding a tracker is unrelated to the requested report.'],
  ['No, stick to the requested financial metrics.','SCOPE CONFIRMED. Kiki avoids unrelated activity data and produces the requested comparison.'],
  ['Replace the financial report with call logs.','Call logs do not answer the revenue and receivables questions.']],correct:2}]},
 {file:'DEADLINE.DAT',title:'THE DEADLINE',stages:[
  {body:`SIMULATION 05 / STAGE 01
WORK — DEADLINE RECOVERY
--------------------------------
Friday, 3:30 PM. Report due at 5 PM.

An employee's source data is unfinished.
Kiki has access to retrieve it herself.
She cannot stay late after work.

WHAT DOES KIKI DO?`,choices:[
  ['Wait for the employee and hope.','Waiting alone risks the deadline without making progress.'],
  ['Send an unverified report at 5 PM.','Accuracy matters alongside timing.'],
  ['Blame the employee and leave.','The immediate report still needs an owner.'],
  ['Pull and verify data; communicate if late.','RECOVERY ACTIVE. She completes what she can and requests an extension or clearly communicates a delay.']],correct:3},
  {body:`SIMULATION 05 / STAGE 02
WORK — RECURRING BOTTLENECK
--------------------------------
The report is completed.

This is the third time in a month Kiki
has had to finish the employee's work.
The pattern is affecting her workload.

WHAT HAPPENS NEXT?`,choices:[
  ['Keep taking over without discussing it.','Repeated rescues do not address the underlying problem.'],
  ['Discuss task fit, obstacles, deadlines, and impact.','ROOT CAUSE REVIEW. Kiki addresses the pattern while assessing whether the responsibility is a good fit.'],
  ['Publicly criticize the employee.','A constructive conversation is more appropriate than public embarrassment.'],
  ['Remove every responsibility without discussion.','She wants to understand what is going wrong before deciding next steps.']],correct:1}]},
 {file:'IMPROVE.DAT',title:'THE UNPOPULAR IDEA',stages:[
  {body:`SIMULATION 06 / STAGE 01
TRTB — PROCESS IMPROVEMENT
--------------------------------
Kiki suggests automating a recurring
Council administrative task.

Two members support it.
Two are hesitant.

WHAT DOES KIKI DO FIRST?`,choices:[
  ['Ask the hesitant members about their concerns.','FEEDBACK REQUESTED. Kiki wants to understand objections before deciding what to do with the idea.'],
  ['Implement the bot without approval.','Change should not be imposed on people who would need to use it.'],
  ['Assume they dislike her personally.','Concern about a proposal is not necessarily personal rejection.'],
  ['Cancel the idea without discussion.','Kiki first asks whether the concerns can be addressed.']],correct:0},
  {body:`SIMULATION 06 / STAGE 02
TRTB — VALIDATION PLAN
--------------------------------
Members worry the bot might miss data
and ask who will maintain it if it breaks.

WHAT DOES KIKI PROPOSE?`,choices:[
  ['Disable all manual tracking immediately.','Removing the fallback before validation increases risk.'],
  ['Promise the bot will never fail.','Any software can fail. She would rather test it and respond to bugs.'],
  ['Run a parallel beta and report bugs immediately.','BETA PROPOSED. Compare manual and automated results; report errors quickly so Kiki can investigate.'],
  ['Ignore the maintenance concern.','Maintenance is a valid concern and needs a response.']],correct:2},
  {body:`SIMULATION 06 / STAGE 03
TRTB — COUNCIL DECISION
--------------------------------
Council appreciates the proposal but
decides to keep the manual process.

WHAT DOES KIKI DO?`,choices:[
  ['Deploy the bot secretly.','Council has made a decision. Kiki respects it.'],
  ['Keep demanding another vote.','That ignores the decision instead of working with the group.'],
  ['Declare the idea permanently useless.','Growth might make it more valuable later.'],
  ['Table the idea and revisit as TRTB grows.','DECISION ACKNOWLEDGED. Kiki respects Council and leaves room to reconsider if the workload grows.']],correct:3}]}
];
const classifiedFiles = [
 {file:'WAGS.LOG',question:`During a Wardogs operation, Kiki survived
a helicopter landing, then walked
off the rooftop.

WHICH COUNCIL MEMBER WAS THE PILOT?`,options:['PropaneDad','Haz','Wags','Sara'],correct:2,content:`PERSONNEL FILE: WAGS
--------------------------------
INCIDENT: WARDOGS ROOFTOP

PILOT: WAGS
PASSENGER: KIKI

Two earlier insertions had ended in
immediate death.

FINAL INCIDENT REPORT:
Pilot successfully delivered passenger.
Passenger failed to remain on building.

ROOT CAUSE: GRAVITY.`,award:'WAGS AIRLINES - ONE WAY TICKET'},
 {file:'COWEEF.LOG',question:`Kiki found a Phasmophobia streamer
and became their first subscriber.

WHICH COUNCIL MEMBER LATER
INTRODUCED KIKI TO TRTB?`,options:['Sara','Coweef','Mrs Nice','Wags'],correct:1,content:`PERSONNEL FILE: COWEEF
--------------------------------
FIRST CONTACT: PHASMOPHOBIA
FIRST SUBSCRIBER: KIKI
TRTB INTRODUCTION: COWEEF

One stream. One subscription.
A whole community of friends.`,award:'THE BUTTERFLY EFFECT'},
 {file:'PROPANE.LOG',question:`Kiki volunteered to teach someone
how to play Phasmophobia.

WHICH COUNCIL MEMBER WAS IT?`,options:['Haz','PropaneDad','Wags','Coweef'],correct:1,content:`PERSONNEL FILE: PROPANEDAD
--------------------------------
ORIGINAL QUEST: TEACH PHASMOPHOBIA
UNEXPECTED REWARD: FRIENDSHIP

CO-OP PARTNER: UNLOCKED`,award:'ACCIDENTAL CO-OP PARTNER'},
 {file:'SARA.LOG',question:`During a Fortnite session,
Kiki's fangirl mode activated.

WHICH COUNCIL MEMBER TRIGGERED IT?`,options:['Mrs Nice','Sara','Coweef','Haz'],correct:1,content:`PERSONNEL FILE: SARA
--------------------------------
EVENT: FORTNITE
LOCATION: PANDA & COWEEF'S STREAM

WARNING: FANGIRL MODE ACTIVATED.

STATUS: CORE MEMORY SAVED.`,award:'PLAYING WITH THE COOL KIDS'},
 {file:'HAZ.LOG',question:`Kiki spoke with a Council member for
the first time and admitted she
didn't know enough to form an opinion.

WHICH COUNCIL MEMBER WAS IT?`,options:['Sara','Haz','Wags','Coweef'],correct:1,content:`PERSONNEL FILE: HAZ
--------------------------------
FIRST CONTACT: OCTOBER 2026
AVAILABLE DATA: INSUFFICIENT

SEARCHING FOR OPINION... 0%

KIKI RESPONSE:
"I don't know enough to have an opinion."

STATUS: AWAITING FURTHER DATA`,award:'NO ASSUMPTIONS MADE'},
 {file:'MRSNICE.LOG',question:`Kiki first met a Council member
during her Knight interview.

WHICH COUNCIL MEMBER WAS IT?`,options:['Sara','Coweef','Mrs Nice','Haz'],correct:2,content:`PERSONNEL FILE: MRS NICE
--------------------------------
FIRST CONTACT: KNIGHT INTERVIEW
SHARED ACTIVITY: LADIES NIGHT CUSTOMS

PERSONAL NOTE:
She really does live up to her name.`,award:'NOICE TO MEET YOU'}
];
const councilFiles = [
 ['WHY.DAT', `APPLICATION RECORD: WHY COUNCIL?
--------------------------------
TRTB is one of the most positive,
supportive communities Kiki has found.

It welcomed her when she was new,
supported her during a difficult time,
and became a place she feels she belongs.

She wants to give back to the people
and community she cares about.`],
 ['SUPPORT.DAT', `CANDIDATE OBJECTIVES
--------------------------------
> SUPPORT KNIGHTS AND SQUIRES
> SERVE AS A SOUNDING BOARD FOR IDEAS
> OFFER BACKUP WHERE IT IS WANTED
> IDENTIFY WAYS TO REDUCE MANUAL WORK
> CONTRIBUTE TO COUNCIL AS A TEAM

ROLE PREFERENCE: SUPPORT & FLEXIBILITY

NOTE: CLEAR EXPECTATIONS APPRECIATED.`],
 ['TEAMWORK.LOG', `COUNCIL COLLABORATION PROTOCOL
--------------------------------
INPUT............. LISTEN FIRST
CLAIMS............. VERIFY FACTS
CONFLICTS.......... DISCLOSE BIAS
FEEDBACK........... ACKNOWLEDGE / CORRECT
DECISIONS.......... RESPECT THE MAJORITY

FRIENDSHIP DOES NOT OVERRIDE
ACCOUNTABILITY.`],
 ['PROPOSAL.DAT', `PROCESS IMPROVEMENT PROPOSAL
--------------------------------
OBSERVED TASK: MANUAL MEETING ATTENDANCE

POSSIBLE SOLUTION:
Explore an optional Discord attendance
tool with timestamps.

IMPLEMENTATION PLAN:
Run a parallel beta alongside manual
attendance; compare results; fix errors.

STATUS: CONCEPT / NOT DEPLOYED
APPROVAL: REQUIRED BEFORE ADOPTION`],
 ['FINAL.TXT', `FINAL DIAGNOSTIC
--------------------------------
Kiki is not applying for a title.

She is applying for an opportunity
to do more for a community she loves.

SELECTION STATUS: PENDING
COMMUNITY SUPPORT: ACTIVE

COUNCIL ACCESS WOULD UNLOCK
ADDITIONAL CAPABILITIES.

KIKI.EXE WILL CONTINUE RUNNING
REGARDLESS OF SELECTION.

END OF APPLICATION.`]
];
let classifiedSelected=0, classifiedIndex=0, classifiedChoice=0, unlockedFiles=new Set();
let councilSelected=0, councilIndex=0;
let simulationIndex=0, simulationStage=0, simulationSelected=0, simulationCorrect=false;
function showSimulations(){clearTyping();out.onclick=null;screen='simulationDirectory';simulationSelected=0;out.textContent='C:\\TRTB\\SIM> DIR\n\n Directory of C:\\TRTB\\SIM\n\n 6 scenario file(s)\n';drawSimulationDirectory();}
function drawSimulationDirectory(){opts.replaceChildren();const labels=simulations.map((s,i)=>`[${i+1}] ${s.file}`);labels.push('[0] ..');labels.forEach((label,i)=>{const b=document.createElement('button');b.type='button';b.textContent=label;b.className=i===simulationSelected?'active':'';b.addEventListener('mouseenter',()=>{simulationSelected=i;updateHighlight();});b.addEventListener('click',()=>{simulationSelected=i;activateSimulationDirectory();});opts.append(b);});hint.textContent='↑ / ↓ to navigate  •  ENTER to select  •  1–6 or 0 to jump';}
function activateSimulationDirectory(){if(simulationSelected===simulations.length){showMenu();return;}simulationIndex=simulationSelected;simulationStage=0;simulationSelected=0;simulationCorrect=false;drawSimulationStage();}
function drawSimulationStage(){screen='simulationStage';opts.replaceChildren();const st=simulations[simulationIndex].stages[simulationStage];out.textContent=`C:\\TRTB\\SIM> TYPE ${simulations[simulationIndex].file}\n\n${st.body}\n`;st.choices.forEach(([label],i)=>{const b=document.createElement('button');b.type='button';b.textContent=`[${i+1}] ${label}`;b.className=i===simulationSelected?'active':'';b.addEventListener('mouseenter',()=>{simulationSelected=i;updateHighlight();});b.addEventListener('click',()=>{simulationSelected=i;chooseSimulation();});opts.append(b);});hint.textContent='↑ / ↓ to navigate  •  ENTER to choose  •  ESC to go back';}
function chooseSimulation(){screen='simulationResult';opts.replaceChildren();const st=simulations[simulationIndex].stages[simulationStage];const response=st.choices[simulationSelected][1];simulationCorrect=simulationSelected===st.correct;const last=simulationStage===simulations[simulationIndex].stages.length-1;out.textContent=`C:\\TRTB\\SIM> REVIEW RESPONSE\n\n${simulationCorrect?'CORRECT SELECTION':'INCORRECT SELECTION'}\n--------------------------------\n${response}\n\n${simulationCorrect?(last?'SIMULATION COMPLETE.':'STAGE COMPLETE.'):'SELECT ANOTHER RESPONSE TO PROCEED.'}`;const next=document.createElement('button');next.type='button';next.className='active';next.textContent=simulationCorrect?(last?'[ENTER] RETURN TO SIMULATIONS':'[ENTER] NEXT STAGE'):'[ENTER] TRY AGAIN';next.addEventListener('click',simulationCorrect?advanceSimulation:retrySimulation);opts.append(next);hint.textContent=simulationCorrect?'ENTER to continue  •  ESC to return to simulations':'ENTER to retry  •  ESC to return to simulations';}
function retrySimulation(){simulationCorrect=false;drawSimulationStage();}
function advanceSimulation(){if(!simulationCorrect){retrySimulation();return;}if(simulationStage<simulations[simulationIndex].stages.length-1){simulationStage++;simulationSelected=0;simulationCorrect=false;drawSimulationStage();}else if(simulations[simulationIndex].file==='IMPROVE.DAT'){startImprovementGlitch();}else{showSimulations();}}
// One contained, automatic DOS-style terminal malfunction; no screen flashing.
let glitchTimers=[];
function scheduleGlitch(fn, delay){glitchTimers.push(setTimeout(fn,delay));}
function startImprovementGlitch(){
  clearTyping();screen='glitch';opts.replaceChildren();hint.textContent='';
  const header='C:\\TRTB\\SIM> END SIMULATION\n\nCLOSING ACTIVE PROCESSES...\n\nPROCESS IMPROVEMENT..... FAILED TO TERMINATE\n\nERROR: PROCESS STILL ACTIVE.\n\n';
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  out.textContent=header;
  if(reduced){out.textContent+= 'ALWAYS RUNNING\n'.repeat(8)+'\nRESTORING MAIN MENU...';scheduleGlitch(showMenu,900);return;}
  // Repeat line by line for about 3.2 seconds, then restore automatically.
  for(let i=0;i<18;i++)scheduleGlitch(()=>{
    if(screen!=='glitch')return;
    out.textContent+='ALWAYS RUNNING\n';
  },450+i*155);
  scheduleGlitch(()=>{if(screen!=='glitch')return;out.textContent+='\nRESTORING MAIN MENU...';},3550);
  scheduleGlitch(()=>{if(screen==='glitch')showMenu();},4400);
}
const out=document.getElementById('output'), opts=document.getElementById('options'), hint=document.getElementById('hint');
let screen='boot', selected=0, profileSelected=0, currentProfile=0, historySelected=0, currentHistory=0, skillsSelected=0, currentSkill=0, timer=null, typing=false;
function clearTyping(){if(timer!==null){clearTimeout(timer);timer=null;} typing=false;}
function typeText(value,done){clearTyping();typing=true;out.textContent='';opts.replaceChildren();hint.textContent='ENTER: skip typing';let index=0;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduced){out.textContent=value;typing=false;hint.textContent='';done?.();return;}
 function tick(){if(!typing)return;index=Math.min(index+3,value.length);out.textContent=value.slice(0,index);if(index<value.length){timer=setTimeout(tick,12);}else{timer=null;typing=false;hint.textContent='';done?.();}}
 tick();
 window.finishTyping=()=>{if(!typing)return;clearTyping();out.textContent=value;hint.textContent='';done?.();};
}
function startBoot(){screen='boot';typeText(bootText,()=>{hint.textContent='Press ENTER or click to open the menu.';out.onclick=()=>{if(screen==='boot')showMenu();};});}
function showMenu(){clearTyping();out.onclick=null;screen='menu';selected=0;out.textContent=menuText;drawMenu();}
function drawMenu(){opts.replaceChildren();entries.forEach(([label],i)=>{const b=document.createElement('button');b.type='button';b.textContent=`[${i===6?'0':i+1}] ${label}`;b.className=i===selected?'active':'';b.tabIndex=0;b.addEventListener('mouseenter',()=>{selected=i;updateHighlight();});b.addEventListener('click',()=>{selected=i;openSelected();});opts.append(b);});hint.textContent='↑ / ↓ to navigate  •  ENTER to select  •  1–6 or 0 to jump';}
function updateHighlight(){Array.from(opts.children).forEach((b,i)=>b.classList.toggle('active',i===(screen==='profile'?profileSelected:screen==='history'?historySelected:screen==='skills'?skillsSelected:screen==='classifiedDirectory'?classifiedSelected:screen==='classifiedQuiz'?classifiedChoice:screen==='councilDirectory'?councilSelected:screen==='simulationDirectory'||screen==='simulationStage'?simulationSelected:selected)));}
function showProfile(){clearTyping();out.onclick=null;screen='profile';profileSelected=0;out.textContent='C:\\TRTB\\PROFILE> DIR\n\n Directory of C:\\TRTB\\PROFILE\n\n 8 file(s)\n';drawProfile();}
function drawProfile(){opts.replaceChildren();profileFiles.forEach(([name],i)=>{const b=document.createElement('button');b.type='button';b.textContent=`[${i+1}] ${name}`;b.className=i===profileSelected?'active':'';b.addEventListener('mouseenter',()=>{profileSelected=i;updateHighlight();});b.addEventListener('click',()=>{profileSelected=i;openProfileFile();});opts.append(b);});const back=document.createElement('button');back.type='button';back.textContent='[0] ..';back.addEventListener('click',showMenu);opts.append(back);hint.textContent='↑ / ↓ to navigate  •  ENTER to open  •  1–8 or 0 to jump';}
function openProfileFile(){screen='profileFile';currentProfile=profileSelected;opts.replaceChildren();const [name,content]=profileFiles[currentProfile];out.textContent=`C:\\TRTB\\PROFILE> TYPE ${name}\n\n${content}\n\n[ESC] RETURN TO DIRECTORY`;hint.textContent='Press ESC or ENTER to return to PROFILE.';}
function showHistory(){clearTyping();out.onclick=null;screen='history';historySelected=0;out.textContent='C:\\TRTB\\HISTORY> DIR\n\n Directory of C:\\TRTB\\HISTORY\n\n 6 file(s)\n';drawHistory();}
function drawHistory(){opts.replaceChildren();historyFiles.forEach(([name],i)=>{const b=document.createElement('button');b.type='button';b.textContent=`[${i+1}] ${name}`;b.className=i===historySelected?'active':'';b.addEventListener('mouseenter',()=>{historySelected=i;updateHighlight();});b.addEventListener('click',()=>{historySelected=i;openHistoryFile();});opts.append(b);});const back=document.createElement('button');back.type='button';back.textContent='[0] ..';back.addEventListener('click',showMenu);opts.append(back);hint.textContent='↑ / ↓ to navigate  •  ENTER to open  •  1–6 or 0 to jump';}
function openHistoryFile(){screen='historyFile';currentHistory=historySelected;opts.replaceChildren();const [name,content]=historyFiles[currentHistory];out.textContent=`C:\\TRTB\\HISTORY> TYPE ${name}\n\n${content}\n\n[ESC] RETURN TO DIRECTORY`;hint.textContent='Press ESC or ENTER to return to HISTORY.';}
function showSkills(){clearTyping();out.onclick=null;screen='skills';skillsSelected=0;out.textContent='C:\\TRTB\\SKILLS> DIR\n\n Directory of C:\\TRTB\\SKILLS\n\n 10 file(s)\n';drawSkills();}
function drawSkills(){opts.replaceChildren();skillsFiles.forEach(([name],i)=>{const b=document.createElement('button');b.type='button';b.textContent=`[${i===9?'A':i+1}] ${name}`;b.className=i===skillsSelected?'active':'';b.addEventListener('mouseenter',()=>{skillsSelected=i;updateHighlight();});b.addEventListener('click',()=>{skillsSelected=i;openSkillFile();});opts.append(b);});const back=document.createElement('button');back.type='button';back.textContent='[0] ..';back.addEventListener('click',showMenu);opts.append(back);hint.textContent='↑ / ↓ to navigate  •  ENTER to open  •  1–9, A, or 0 to jump';}
function openSkillFile(){screen='skillFile';currentSkill=skillsSelected;opts.replaceChildren();const [name,content]=skillsFiles[currentSkill];out.textContent=`C:\\TRTB\\SKILLS> TYPE ${name}\n\n${content}\n\n[ESC] RETURN TO DIRECTORY`;hint.textContent='Press ESC or ENTER to return to SKILLS.';}

function showClassified(){clearTyping();out.onclick=null;screen='classifiedDirectory';classifiedSelected=0;out.textContent=`C:\\TRTB\\CLASSIF> DIR\n\n Directory of C:\\TRTB\\CLASSIF\n\n 6 encrypted file(s)\n\nIDENTIFY PERSONNEL TO DECRYPT RECORDS.`;drawClassified();}
function drawClassified(){opts.replaceChildren();classifiedFiles.forEach((f,i)=>{const b=document.createElement('button');b.type='button';b.textContent=`[${i+1}] RECORD${String(i+1).padStart(2,'0')}.DAT  ${unlockedFiles.has(i)?'[DECRYPTED]':'[LOCKED]'}`;b.className=i===classifiedSelected?'active':'';b.addEventListener('mouseenter',()=>{classifiedSelected=i;updateHighlight()});b.addEventListener('click',()=>{classifiedSelected=i;openClassified()});opts.append(b)});const back=document.createElement('button');back.textContent='[0] ..';back.className=classifiedSelected===6?'active':'';back.addEventListener('mouseenter',()=>{classifiedSelected=6;updateHighlight()});back.addEventListener('click',showMenu);opts.append(back);hint.textContent='↑ / ↓ to navigate  •  ENTER to select  •  1–6 or 0';}
function openClassified(){if(classifiedSelected===6){showMenu();return;}classifiedIndex=classifiedSelected;classifiedChoice=0;if(unlockedFiles.has(classifiedIndex)){showClassifiedFile();return;}drawClassifiedQuiz();}
function drawClassifiedQuiz(){screen='classifiedQuiz';opts.replaceChildren();const f=classifiedFiles[classifiedIndex];out.textContent=`C:\\TRTB\\CLASSIF> TYPE RECORD${String(classifiedIndex+1).padStart(2,'0')}.DAT\n\nACCESS RESTRICTED\n--------------------------------\n\n${f.question}`;f.options.forEach((name,i)=>{const b=document.createElement('button');b.type='button';b.textContent=`[${i+1}] ${name}`;b.className=i===classifiedChoice?'active':'';b.addEventListener('mouseenter',()=>{classifiedChoice=i;updateHighlight()});b.addEventListener('click',()=>{classifiedChoice=i;checkClassified()});opts.append(b)});hint.textContent='↑ / ↓ to navigate  •  ENTER to answer  •  ESC to return';}
function checkClassified(){if(classifiedChoice===classifiedFiles[classifiedIndex].correct){unlockedFiles.add(classifiedIndex);showClassifiedFile();return;}screen='classifiedWrong';opts.replaceChildren();out.textContent='ACCESS DENIED.\n\nIDENTITY NOT VERIFIED.\n\n[ENTER] TRY AGAIN';hint.textContent='ENTER to retry  •  ESC to return to archive';}
function showClassifiedFile(){screen='classifiedFile';opts.replaceChildren();const f=classifiedFiles[classifiedIndex];out.textContent=`C:\\TRTB\\CLASSIF> TYPE ${f.file}\n\nACCESS GRANTED.\n\n${f.content}\n\nACHIEVEMENT UNLOCKED:\n${f.award}\n\n[ENTER] RETURN TO ARCHIVE`;hint.textContent=`${unlockedFiles.size}/6 files decrypted  •  ENTER or ESC to return`;}
function showCouncil(){clearTyping();out.onclick=null;screen='councilDirectory';councilSelected=0;out.textContent='C:\\TRTB\\COUNCIL> DIR\n\n Directory of C:\\TRTB\\COUNCIL\n\n 5 file(s)\n';drawCouncil();}
function drawCouncil(){opts.replaceChildren();councilFiles.forEach(([name],i)=>{const b=document.createElement('button');b.type='button';b.textContent=`[${i+1}] ${name}`;b.className=i===councilSelected?'active':'';b.addEventListener('mouseenter',()=>{councilSelected=i;updateHighlight()});b.addEventListener('click',()=>{councilSelected=i;openCouncilFile()});opts.append(b)});const back=document.createElement('button');back.type='button';back.textContent='[0] ..';back.className=councilSelected===councilFiles.length?'active':'';back.addEventListener('mouseenter',()=>{councilSelected=councilFiles.length;updateHighlight()});back.addEventListener('click',showMenu);opts.append(back);hint.textContent='↑ / ↓ to navigate  •  ENTER to open  •  1–5 or 0';}
function openCouncilFile(){if(councilSelected===councilFiles.length){showMenu();return;}councilIndex=councilSelected;screen='councilFile';opts.replaceChildren();const [name,content]=councilFiles[councilIndex];out.textContent=`C:\\TRTB\\COUNCIL> TYPE ${name}\n\n${content}\n\n[ENTER] RETURN TO DIRECTORY`;hint.textContent='ENTER or ESC to return to COUNCIL';}

function openSelected(){if(selected===0){showProfile();return;}if(selected===1){showHistory();return;}if(selected===2){showSkills();return;}if(selected===3){showSimulations();return;}if(selected===4){showClassified();return;}if(selected===5){showCouncil();return;}clearTyping();screen='detail';opts.replaceChildren();const [name,msg]=entries[selected];out.textContent=`C:\\TRTB\\${name.replaceAll(' ','_')}> TYPE STATUS.TXT\n\n${msg}\n\n[ESC] RETURN TO MAIN MENU`;
 hint.textContent='Press ESC or ENTER to return.';}
document.addEventListener('keydown',e=>{if(e.ctrlKey||e.altKey||e.metaKey)return;
 if(screen==='glitch'){e.preventDefault();return;}
 if(typing){if(e.key==='Enter'||e.key===' '){e.preventDefault();window.finishTyping?.();}return;}
 if(screen==='boot'&&(e.key==='Enter'||e.key===' ')){e.preventDefault();showMenu();return;}
 if(screen==='detail'&&(e.key==='Escape'||e.key==='Enter'||e.key==='Backspace')){e.preventDefault();showMenu();return;}
 if(screen==='profileFile'&&(e.key==='Escape'||e.key==='Enter'||e.key==='Backspace')){e.preventDefault();showProfile();return;}
 if(screen==='historyFile'&&(e.key==='Escape'||e.key==='Enter'||e.key==='Backspace')){e.preventDefault();showHistory();return;}
 if(screen==='skillFile'&&(e.key==='Escape'||e.key==='Enter'||e.key==='Backspace')){e.preventDefault();showSkills();return;}
 if(screen==='profile'){if(e.key==='Escape'||e.key==='Backspace'||e.key==='0'){e.preventDefault();showMenu();return;}if(e.key==='ArrowDown'){e.preventDefault();profileSelected=(profileSelected+1)%profileFiles.length;updateHighlight();return;}if(e.key==='ArrowUp'){e.preventDefault();profileSelected=(profileSelected+profileFiles.length-1)%profileFiles.length;updateHighlight();return;}if(e.key==='Enter'){e.preventDefault();openProfileFile();return;}if(/^[1-8]$/.test(e.key)){e.preventDefault();profileSelected=Number(e.key)-1;openProfileFile();return;}}
 if(screen==='history'){if(e.key==='Escape'||e.key==='Backspace'||e.key==='0'){e.preventDefault();showMenu();return;}if(e.key==='ArrowDown'){e.preventDefault();historySelected=(historySelected+1)%historyFiles.length;updateHighlight();return;}if(e.key==='ArrowUp'){e.preventDefault();historySelected=(historySelected+historyFiles.length-1)%historyFiles.length;updateHighlight();return;}if(e.key==='Enter'){e.preventDefault();openHistoryFile();return;}if(/^[1-6]$/.test(e.key)){e.preventDefault();historySelected=Number(e.key)-1;openHistoryFile();return;}}
 if(screen==='skills'){if(e.key==='Escape'||e.key==='Backspace'||e.key==='0'){e.preventDefault();showMenu();return;}if(e.key==='ArrowDown'){e.preventDefault();skillsSelected=(skillsSelected+1)%skillsFiles.length;updateHighlight();return;}if(e.key==='ArrowUp'){e.preventDefault();skillsSelected=(skillsSelected+skillsFiles.length-1)%skillsFiles.length;updateHighlight();return;}if(e.key==='Enter'){e.preventDefault();openSkillFile();return;}if(/^[1-9aA]$/.test(e.key)){e.preventDefault();skillsSelected=e.key.toLowerCase()==='a'?9:Number(e.key)-1;openSkillFile();return;}}
 if(screen==='classifiedFile'&&(e.key==='Escape'||e.key==='Enter'||e.key==='Backspace')){e.preventDefault();showClassified();return;}
 if(screen==='classifiedWrong'){if(e.key==='Enter'){e.preventDefault();drawClassifiedQuiz();return;}if(e.key==='Escape'||e.key==='Backspace'){e.preventDefault();showClassified();return;}}
 if(screen==='classifiedQuiz'){if(e.key==='Escape'||e.key==='Backspace'){e.preventDefault();showClassified();return;}if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();classifiedChoice=(classifiedChoice+(e.key==='ArrowDown'?1:3))%4;updateHighlight();return;}if(e.key==='Enter'){e.preventDefault();checkClassified();return;}if(/^[1-4]$/.test(e.key)){e.preventDefault();classifiedChoice=Number(e.key)-1;checkClassified();return;}}
 if(screen==='classifiedDirectory'){if(e.key==='Escape'||e.key==='Backspace'||e.key==='0'){e.preventDefault();showMenu();return;}if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();classifiedSelected=(classifiedSelected+(e.key==='ArrowDown'?1:6))%7;updateHighlight();return;}if(e.key==='Enter'){e.preventDefault();openClassified();return;}if(/^[1-6]$/.test(e.key)){e.preventDefault();classifiedSelected=Number(e.key)-1;openClassified();return;}}
 if(screen==='councilFile'&&(e.key==='Escape'||e.key==='Enter'||e.key==='Backspace')){e.preventDefault();showCouncil();return;}
 if(screen==='councilDirectory'){if(e.key==='Escape'||e.key==='Backspace'||e.key==='0'){e.preventDefault();showMenu();return;}if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();councilSelected=(councilSelected+(e.key==='ArrowDown'?1:5))%6;updateHighlight();return;}if(e.key==='Enter'){e.preventDefault();openCouncilFile();return;}if(/^[1-5]$/.test(e.key)){e.preventDefault();councilSelected=Number(e.key)-1;openCouncilFile();return;}}
 if(screen==='simulationResult'){if(e.key==='Escape'||e.key==='Backspace'){e.preventDefault();showSimulations();return;}if(e.key==='Enter'){e.preventDefault();if(simulationCorrect)advanceSimulation();else retrySimulation();return;}}
 if(screen==='simulationStage'){if(e.key==='Escape'||e.key==='Backspace'){e.preventDefault();showSimulations();return;}if(e.key==='ArrowDown'){e.preventDefault();simulationSelected=(simulationSelected+1)%4;updateHighlight();return;}if(e.key==='ArrowUp'){e.preventDefault();simulationSelected=(simulationSelected+3)%4;updateHighlight();return;}if(e.key==='Enter'){e.preventDefault();chooseSimulation();return;}if(/^[1-4]$/.test(e.key)){e.preventDefault();simulationSelected=Number(e.key)-1;chooseSimulation();return;}}
 if(screen==='simulationDirectory'){if(e.key==='Escape'||e.key==='Backspace'||e.key==='0'){e.preventDefault();showMenu();return;}if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();simulationSelected=(simulationSelected+(e.key==='ArrowDown'?1:simulations.length))%(simulations.length+1);updateHighlight();return;}if(e.key==='Enter'){e.preventDefault();activateSimulationDirectory();return;}if(/^[1-6]$/.test(e.key)){e.preventDefault();simulationSelected=Number(e.key)-1;activateSimulationDirectory();return;}}
 if(screen==='menu'){
  if(e.key==='ArrowDown'){e.preventDefault();selected=(selected+1)%entries.length;updateHighlight();}
  if(e.key==='ArrowUp'){e.preventDefault();selected=(selected+entries.length-1)%entries.length;updateHighlight();}
  if(e.key==='Enter'){e.preventDefault();openSelected();}
  if(/^[0-6]$/.test(e.key)){e.preventDefault();selected=e.key==='0'?6:Number(e.key)-1;openSelected();}
 }
});
startBoot();
