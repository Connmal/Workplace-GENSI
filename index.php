<?php header("Content-Type: text/html; charset=utf-8"); ?>
<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <!--<link rel="stylesheet" href="bootstrap.min.css">-->
    <script src="jquery.min.js"></script>
  </head>
  <body>
    <script src="d3.v3.min.js" charset="utf-8"></script>
    <script src="jquery-1.11.0.js"></script>
    <script type="text/javascript">

      // Prevent window close
      var hook = true;
      window.onbeforeunload = function() {
        if (hook) {
          return "Are you sure that you want to end this survey? All of your answers will be lost.";
        }
      }
      function unhook() {
        hook=false;
      }
      var bodyHeightone = $(document).height() - 20;
      if (bodyHeightone < 2800) bodyHeightone = 3200;
      var bodyWidth = $(document).width();
      var bodyHeight = $(document).height() - 20;
      if (bodyWidth < 800) bodyWidth = 800;
      if (bodyHeight < 750) bodyHeight = 750;
      var center = bodyWidth / 2;
      var middle = bodyHeight / 200;

      var textWidth = 800;
      var text_offset_top = 60;
      var title_offset_top = 70;
      var lineHeight = 18;
      var nodeLine = 360;

      var q_window_width = 100,
          q_window_height = 100,
          backdrop_width = 500;

      // left and top values for individual questions
      var question_lnum = center - (textWidth / 2);
      var string_l = question_lnum.toString();
      var string_t = "150px";
      var string_r_t = "45%",
          q_margin_top = 200,
          q_margin_top_str = q_margin_top.toString();

      // bar with boxes for answers
      var boxbar_margin = 10,
          boxbar_label_margin = 3,
          bar_target_height = 100,
          bar_target_width = ((bodyWidth - (boxbar_margin * 4) - 20) / 5),
          bar4_target_width = ((bodyWidth - (boxbar_margin * 3) - 20) / 4),
          bar5_target_width = ((bodyWidth - (boxbar_margin * 4) - 20) / 5),
          bar6_target_width = ((bodyWidth - (boxbar_margin * 5) - 20) / 6),
          bar_label_height = 25,
          boxbar_offset_x = 10,
          boxbar_offset_y = bodyHeight - bar_target_height - 100;

      var currSlide = 1;
      var numAlters = 0;
      var askedAbout = 0;
      var lastAskedAbout = 0;
      var numAsked = 1;
      var lastAnswered = 0;
      var numOther = 0;
      var checked = false;
      var altered = false;
      var skipped = false;
      var currNode = null;
      var nodeColor = '#9CD4D4',
          otherColor = '#faffa4',
          maleColor = '#a8a4ff',
          friendsColor = '#42f477',
          kidsColor = '#ffc1d8',
          kinderwensColor = '#ce88ae',
          kinderloosColor = '#c0d183',
          kinderhulpColor = '#c8b6db',
          kinderpraatColor = '#ef8f8f',
          answerColor = '#abff48';

///Below is the barebones HTML script for the questions and answers whether they be radio buttons or text boxes etc...
      var startTime;
      var answers = [];
    </script>
    <script src="ie.js"></script>
    <script src="nodefunctions.js"></script>
    <script src="graph.js"></script>
    <script src="elementmanipulation.js"></script>
    <script src="slides.js"></script>
    <script src="multiplechoiceelements.js"></script>
    <script src="shownext.js"></script>
    <script src="keypress.js"></script>



      <div class="input-group" id="code_input" method="get" display="none" onsubmit ="return false;">
        <form id="codeID">
        <span class="slideText">Please check the circle and enter code that you will remember in case you wish to withdraw your data from this study (Make sure it is not your email or any other personally identifiable information).</span><br><br>
        <input type="radio" id="codeText" name="code" value="1"><label for="codecheckText"><span class="questionText"> Enter your code here:</span>
        <input type="text" id="codetextInput" name="code">
        </form>
        </div>

      <div class="input-group" id="prol_input" method="get" display="none" onsubmit ="return false;">
        <form id="prolID">
        <span class="slideText">Please check the circle and enter your prolific details to make sure you are reimbursed for taking part in the study.</span><br><br>
        <input type="radio" id="prolText" name="pr" value="1"><label for="prolcheckText"><span class="questionText"> Enter your prolific code here:</span>
        <input type="text" id="proltextInput" name="pr">
        </form>
        </div>

        <div class="input-group" id="age_input" method="get" display="none" onsubmit ="return false;">
          <form id="ageID">
          <span class="slideText">Please check the circle and enter your age in years. Use a numerical value. (For example : 21).</span><br><br>
          <input type="radio" id="ageText" name="age" value="1"><label for="agecheckText"><span class="questionText"> Enter your age here:</span>
          <input type="text" id="agetextInput" name="age">
          </form>
          </div>

        </div>
        <div class="input-group" display="none" id="instagram_input" method="get">
          <form id="instagramuser" display="none">
            <span class="slideText">In the past, who out of these people have you gone to for instrumental support more than once?</span><br><br>
            <input type="radio" name="instagram" value="Yes"><span class="questionText"> Yes</span><br>
            <input type="radio" name="instagram" value="No"><span class="questionText"> No</span><br>
          </form>
        </div>

    </div>
    <div class="input-group" display="none" id="gender_input" method="get">
      <form id="genderuser" display="none">
        <span class="slideText">Please select your gender.</span><br><br>
        <input type="radio" name="gender" value="Male"><span class="questionText"> Male</span><br>
        <input type="radio" name="gender" value="Female"><span class="questionText"> Female </span><br>
        <input type="radio" name="gender" value="Other"><span class="questionText"> Other</span><br>
        <input type="radio" name="gender" value="Prefer_Not_To_Say"><span class="questionText"> Prefer Not To Say</span><br>
      </form>
    </div>

  </div>
  <div class="input-group" display="none" id="education_input" method="get">
    <form id="educationuser" display="none">
      <span class="slideText">Please select your current level of education.</span><br><br>
      <input type="radio" name="education" value="Primary/No education"><span class="questionText"> Primary/No education</span><br>
      <input type="radio" name="education" value="High School Degree"><span class="questionText"> High School Degree</span><br>
      <input type="radio" name="education" value="A-Level"><span class="questionText"> A-Level</span><br>
      <input type="radio" name="education" value="Bachelor Degree"><span class="questionText"> Bachelor Degree</span><br>
      <input type="radio" name="education" value="Postgraduate or Higher"><span class="questionText"> Postgraduate or Higher</span><br>
    </form>
  </div>

</div>
<div class="input-group" display="none" id="nation_input" method="get">
  <form id="nationuser" display="none">
    <span class="slideText">Please select your nationality.</span><br><br>
    <input type="radio" name="nation" value="1"><span class="questionText"> British</span><br>
    <input type="radio" name="nation" value="2"><span class="questionText"> American </span><br>
    <input type="radio" name="nation" value="3"><span class="questionText"> Prefer Not To Say</span><br>
    <input type="radio" id="nationText" name="nation" value="4"><label for="nationcheckText"><span class="questionText"> If other, state here:</span>
    <input type="text" id="nationtextInput" name="nation">
  </form>
</div>


    <div class="input-group" id="name_input" method="get" onsubmit="addAlter()">
      <input type="text" id="alterName" class="form-control" placeholder="Name" size="10">
      <button type="submit" id="alterSubmit" class="btn btn-default" position="inline" value="Enter" onclick="addAlter()">Add</button>
    </div>

    <div class="input-group" id="genderalter" method="get">
      <form id="genderaltr">
        <input type="radio" name="gA" value="Male" id="gAm"><label for="gAm"><span class="questionText">  Male</span></label><br>
        <input type="radio" name="gA" value="Female" id="gAf"><label for="gAf"><span class="questionText">  Female</span></label><br>
        <input type="radio" name="gA" value="Other" id="gAo"><label for="gAo"><span class="questionText">  Other</span></label><br>
        <input type="radio" name="gA" value="Prefer not to say" id="gAp"><label for="gAp"><span class="questionText">  Prefer not to say</span></label>
        </form>
    </div>

    <div class="input-group" id="leeftijdAlter" method="get">
      <form id="leeftijdAltr">
        <input type="radio" name="lA" value="16" id="lA16"><label for="lA16"><span class="questionText">  16</span></label><br>
        <input type="radio" name="lA" value="17" id="lA18"><label for="lA17"><span class="questionText">  17</span></label><br>
        <input type="radio" name="lA" value="18" id="lA18"><label for="lA18"><span class="questionText">  18</span></label><br>
        <input type="radio" name="lA" value="19" id="lA19"><label for="lA19"><span class="questionText">  19</span></label><br>
        <input type="radio" name="lA" value="20" id="lA20"><label for="lA20"><span class="questionText">  20</span></label><br>
        <input type="radio" name="lA" value="21" id="lA21"><label for="lA21"><span class="questionText">  21</span></label><br>
        <input type="radio" name="lA" value="22" id="lA22"><label for="lA22"><span class="questionText">  22</span></label><br>
        <input type="radio" name="lA" value="23" id="lA23"><label for="lA23"><span class="questionText">  23</span></label><br>
        <input type="radio" name="lA" value="24" id="lA24"><label for="lA24"><span class="questionText">  24</span></label><br>
        <input type="radio" name="lA" value="25" id="lA25"><label for="lA25"><span class="questionText">  25</span></label><br>
        <input type="radio" name="lA" value="26" id="lA26"><label for="lA26"><span class="questionText">  26</span></label><br>
        <input type="radio" name="lA" value="27" id="lA27"><label for="lA27"><span class="questionText">  27</span></label><br>
        <input type="radio" name="lA" value="28" id="lA28"><label for="lA28"><span class="questionText">  28</span></label><br>
        <input type="radio" name="lA" value="29" id="lA29"><label for="lA29"><span class="questionText">  29</span></label><br>
        <input type="radio" name="lA" value="30" id="lA30"><label for="lA30"><span class="questionText">  30</span></label><br>
        <input type="radio" name="lA" value="31" id="lA31"><label for="lA31"><span class="questionText">  31</span></label><br>
        <input type="radio" name="lA" value="32" id="lA32"><label for="lA32"><span class="questionText">  32</span></label><br>
        <input type="radio" name="lA" value="33" id="lA33"><label for="lA33"><span class="questionText">  33</span></label><br>
        <input type="radio" name="lA" value="34" id="lA34"><label for="lA34"><span class="questionText">  34</span></label><br>
        <input type="radio" name="lA" value="35" id="lA35"><label for="lA35"><span class="questionText">  35</span></label><br>
        <input type="radio" name="lA" value="36" id="lA36"><label for="lA36"><span class="questionText">  36</span></label><br>
        <input type="radio" name="lA" value="37" id="lA37"><label for="lA37"><span class="questionText">  37</span></label><br>
        <input type="radio" name="lA" value="38" id="lA38"><label for="lA38"><span class="questionText">  38</span></label><br>
        <input type="radio" name="lA" value="39" id="lA39"><label for="lA39"><span class="questionText">  39</span></label><br>
        <input type="radio" name="lA" value="40" id="lA40"><label for="lA40"><span class="questionText">  40</span></label><br>
        <input type="radio" name="lA" value="41" id="lA41"><label for="lA41"><span class="questionText">  41</span></label><br>
        <input type="radio" name="lA" value="42" id="lA42"><label for="lA42"><span class="questionText">  42</span></label><br>
        <input type="radio" name="lA" value="43" id="lA43"><label for="lA43"><span class="questionText">  43</span></label><br>
        <input type="radio" name="lA" value="44" id="lA44"><label for="lA44"><span class="questionText">  44</span></label><br>
        <input type="radio" name="lA" value="45" id="lA45"><label for="lA45"><span class="questionText">  45</span></label><br>
        <input type="radio" name="lA" value="46" id="lA46"><label for="lA46"><span class="questionText">  46</span></label><br>
        <input type="radio" name="lA" value="47" id="lA47"><label for="lA47"><span class="questionText">  47</span></label><br>
        <input type="radio" name="lA" value="48" id="lA48"><label for="lA48"><span class="questionText">  48</span></label><br>
        <input type="radio" name="lA" value="49" id="lA49"><label for="lA49"><span class="questionText">  49</span></label><br>
        <input type="radio" name="lA" value="50" id="lA50"><label for="lA50"><span class="questionText">  50</span></label><br>
        <input type="radio" name="lA" value="51" id="lA51"><label for="lA51"><span class="questionText">  51</span></label><br>
        <input type="radio" name="lA" value="52" id="lA52"><label for="lA52"><span class="questionText">  52</span></label><br>
        <input type="radio" name="lA" value="53" id="lA53"><label for="lA53"><span class="questionText">  53</span></label><br>
        <input type="radio" name="lA" value="54" id="lA54"><label for="lA54"><span class="questionText">  54</span></label><br>
        <input type="radio" name="lA" value="55" id="lA55"><label for="lA55"><span class="questionText">  55</span></label><br>
        <input type="radio" name="lA" value="56" id="lA56"><label for="lA56"><span class="questionText">  56</span></label><br>
        <input type="radio" name="lA" value="57" id="lA57"><label for="lA57"><span class="questionText">  57</span></label><br>
        <input type="radio" name="lA" value="58" id="lA58"><label for="lA58"><span class="questionText">  58</span></label><br>
        <input type="radio" name="lA" value="59" id="lA59"><label for="lA59"><span class="questionText">  59</span></label><br>
        <input type="radio" name="lA" value="60" id="lA60"><label for="lA60"><span class="questionText">  60</span></label><br>
        <input type="radio" name="lA" value="61" id="lA61"><label for="lA61"><span class="questionText">  61</span></label><br>
        <input type="radio" name="lA" value="62" id="lA62"><label for="lA62"><span class="questionText">  62</span></label><br>
        <input type="radio" name="lA" value="63" id="lA63"><label for="lA63"><span class="questionText">  63</span></label><br>
        <input type="radio" name="lA" value="64" id="lA64"><label for="lA64"><span class="questionText">  64</span></label><br>
        <input type="radio" name="lA" value="65+" id="lA65+"><label for="lA65+"><span class="questionText"> 65 or over</span></label>
      </form>
    </div>



    <div class="input-group" id="relatieAlter" method="get" onsubmit="return false;">
      <form id="relatieAltr">
        <input type="checkbox" name="rA" value="1" id="rA1"><label for="rA1"><span class="questionText">  Romantic partner</span></label><br>
        <input type="checkbox" name="rA" value="2" id="rA2"><label for="rA2"><span class="questionText">  Father/Mother</span></label><br>
        <input type="checkbox" name="rA" value="3" id="rA3"><label for="rA3"><span class="questionText">  Brother/Sister</span></label><br>
        <input type="checkbox" name="rA" value="4" id="rA4"><label for="rA4"><span class="questionText">  Another family member (for example, uncle/aunt, nephew/niece)</span></label><br>
        <input type="checkbox" name="rA" value="5" id="rA5"><label for="rA5"><span class="questionText">  Romantic partner's family member</span></label><br>
        <input type="checkbox" name="rA" value="6" id="rA6"><label for="rA6"><span class="questionText">  Friend of romantic partner</span></label><br>
        <input type="checkbox" name="rA" value="7" id="rA7"><label for="rA7"><span class="questionText">  From primary school</span></label><br>
        <input type="checkbox" name="rA" value="8" id="rA8"><label for="rA8"><span class="questionText">  From secondary school</span></label><br>
        <input type="checkbox" name="rA" value="9" id="rA9"><label for="rA9"><span class="questionText">  From studying</span></label><br>
        <input type="checkbox" name="rA" value="10" id="rA10"><label for="rA10"><span class="questionText">  Via work</span></label><br>
        <input type="checkbox" name="rA" value="11" id="rA11"><label for="rA11"><span class="questionText">  Via social activity (sport, hobby)</span></label><br>
        <input type="checkbox" name="rA" value="12" id="rA12"><label for="rA12"><span class="questionText">  Via a common friend</span></label><br>
        <input type="checkbox" name="rA" value="13" id="rA13"><label for="rA13"><span class="questionText">  Neighbour</span></label><br>
        <input type="checkbox" id="rAcheckText" name="rA" value="14"><label for="rAcheckText"><span class="questionText">  In a different way, namely:</span></label><br>
        <input type="text" id="rAtextInput" name="rA">
      </form>
    </div>

    <div class="input-group" id="kinderenAlter" method="get">
      <form id="kinderenAltr">
        <input type="radio" name="kA" value="1" id="kA1"><label for="kA1"><span class="questionText">  Yes</span></label><br>
        <input type="radio" name="kA" value="2" id="kA2"><label for="kA2"><span class="questionText">  No</span></label>
      </form>
    </div>

    <div class="input-group" id="leeftijdKindAlter" method="get">
      <form id="leeftijdKndAltr">
        <input type="radio" name="lkA" value="1" id="lkA1"><label for="lkA1"><span class="questionText">  Yes</span></label><br>
        <input type="radio" name="lkA" value="2" id="lkA2"><label for="lkA2"><span class="questionText">  No</span></label>
      </form>
    </div>

    <div class="input-group" id="levensplezierAlter" method="get">
      <form id="levensplezierAltr">
        <input type="radio" name="lpA" value="1" id="lpA1"><label for="lpA1"><span class="questionText">  More than once a day</span></label><br>
        <input type="radio" name="lpA" value="2" id="lpA2"><label for="lpA2"><span class="questionText">  Atleast once a day</span></label><br>
        <input type="radio" name="lpA" value="3" id="lpA4"><label for="lpA4"><span class="questionText">  A few times a week</span></label><br>
        <input type="radio" name="lpA" value="4" id="lpA3"><label for="lpA3"><span class="questionText">  At least once a week</span></label><br>
        <input type="radio" name="lpA" value="5" id="lpA5"><label for="lpA5"><span class="questionText">  Less than once a week</span></label>
      </form>
    </div>


    <

    <div class="input-group" id="insta1" method="get">
      <form id="ins1user" >
        <span class="slideText">To what extent does your job have negative characteristics (e.g. high demands; requires a lot of effort; little consultation on change; role conflict; issues with other members of staff)?</span><br><br>
        <input type="radio" name="in1" value="10"><span class="questionText"> 10 Very much so</span><br>
        <input type="radio" name="in1" value="9"><span class="questionText"> 9</span><br>
        <input type="radio" name="in1" value="8"><span class="questionText"> 8</span><br>
        <input type="radio" name="in1" value="7"><span class="questionText"> 7</span><br>
        <input type="radio" name="in1" value="6"><span class="questionText"> 6</span><br>
        <input type="radio" name="in1" value="5"><span class="questionText"> 5</span><br>
        <input type="radio" name="in1" value="4"><span class="questionText"> 4</span><br>
        <input type="radio" name="in1" value="3"><span class="questionText"> 3</span><br>
        <input type="radio" name="in1" value="2"><span class="questionText"> 2</span><br>
        <input type="radio" name="in1" value="1"><span class="questionText"> 1 Not at all</span><br>
      </form>
      <form id="ins2user">
        <span class="slideText">To what extent does your job have positive characteristics (e.g. control over what you do or how you do it; support from colleagues; support from managers; appropriate rewards)?</span><br><br>
        <input type="radio" name="in2" value="10"><span class="questionText"> 10 Very much so</span><br>
        <input type="radio" name="in2" value="9"><span class="questionText"> 9</span><br>
        <input type="radio" name="in2" value="8"><span class="questionText"> 8</span><br>
        <input type="radio" name="in2" value="7"><span class="questionText"> 7</span><br>
        <input type="radio" name="in2" value="6"><span class="questionText"> 6</span><br>
        <input type="radio" name="in2" value="5"><span class="questionText"> 5</span><br>
        <input type="radio" name="in2" value="4"><span class="questionText"> 4</span><br>
        <input type="radio" name="in2" value="3"><span class="questionText"> 3</span><br>
        <input type="radio" name="in2" value="2"><span class="questionText"> 2</span><br>
        <input type="radio" name="in2" value="1"><span class="questionText"> 1 Not at all</span><br>
      </form>
      </form>
    </div>

    <div class="input-group" id="insta3" method="get">
      <form id="ins3user" >
        <span class="slideText">To what extent do you try to cope with problems in a positive way (e.g. you focus on the problem and try and solve it; you get social support)?</span><br><br>
        <input type="radio" name="in3" value="10"><span class="questionText"> 10 Very much so</span><br>
        <input type="radio" name="in3" value="9"><span class="questionText"> 9</span><br>
        <input type="radio" name="in3" value="8"><span class="questionText"> 8</span><br>
        <input type="radio" name="in3" value="7"><span class="questionText"> 7</span><br>
        <input type="radio" name="in3" value="6"><span class="questionText"> 6</span><br>
        <input type="radio" name="in3" value="5"><span class="questionText"> 5</span><br>
        <input type="radio" name="in3" value="4"><span class="questionText"> 4</span><br>
        <input type="radio" name="in3" value="3"><span class="questionText"> 3</span><br>
        <input type="radio" name="in3" value="2"><span class="questionText"> 2</span><br>
        <input type="radio" name="in3" value="1"><span class="questionText"> 1 Not at all</span><br>
      </form>
      </form>
      <form id="ins4user">
        <span class="slideText">To what extent do you deal with problems in a passive way (e.g. avoid them; use wishful thinking; blame yourself)? </span><br><br>
        <input type="radio" name="in4" value="10"><span class="questionText"> 10 Very much so</span><br>
        <input type="radio" name="in4" value="9"><span class="questionText"> 9</span><br>
        <input type="radio" name="in4" value="8"><span class="questionText"> 8</span><br>
        <input type="radio" name="in4" value="7"><span class="questionText"> 7</span><br>
        <input type="radio" name="in4" value="6"><span class="questionText"> 6</span><br>
        <input type="radio" name="in4" value="5"><span class="questionText"> 5</span><br>
        <input type="radio" name="in4" value="4"><span class="questionText"> 4</span><br>
        <input type="radio" name="in4" value="3"><span class="questionText"> 3</span><br>
        <input type="radio" name="in4" value="2"><span class="questionText"> 2</span><br>
        <input type="radio" name="in4" value="1"><span class="questionText"> 1 Not at all</span><br>
      </form>
      </form>
    </div>

    <div class="input-group" id="insta5" method="get">
      <form id="ins5user" >
        <span class="slideText">Do you think you have a positive personality (e.g. open; conscientious; extravert; agreeable; stable; high self-esteem; high self-efficacy; optimistic)?</span><br><br>
        <input type="radio" name="in5" value="10"><span class="questionText"> 10 Very much so</span><br>
        <input type="radio" name="in5" value="9"><span class="questionText"> 9</span><br>
        <input type="radio" name="in5" value="8"><span class="questionText"> 8</span><br>
        <input type="radio" name="in5" value="7"><span class="questionText"> 7</span><br>
        <input type="radio" name="in5" value="6"><span class="questionText"> 6</span><br>
        <input type="radio" name="in5" value="5"><span class="questionText"> 5</span><br>
        <input type="radio" name="in5" value="4"><span class="questionText"> 4</span><br>
        <input type="radio" name="in5" value="3"><span class="questionText"> 3</span><br>
        <input type="radio" name="in5" value="2"><span class="questionText"> 2</span><br>
        <input type="radio" name="in5" value="1"><span class="questionText"> 1 Not at all</span><br>
      </form>
      </form>
      <form id="ins6user">
        <span class="slideText">Are you a model employee (e.g. helping; courteous; a good sport)? </span><br><br>
        <input type="radio" name="in6" value="10"><span class="questionText"> 10 Very much so</span><br>
        <input type="radio" name="in6" value="9"><span class="questionText"> 9</span><br>
        <input type="radio" name="in6" value="8"><span class="questionText"> 8</span><br>
        <input type="radio" name="in6" value="7"><span class="questionText"> 7</span><br>
        <input type="radio" name="in6" value="6"><span class="questionText"> 6</span><br>
        <input type="radio" name="in6" value="5"><span class="questionText"> 5</span><br>
        <input type="radio" name="in6" value="4"><span class="questionText"> 4</span><br>
        <input type="radio" name="in6" value="3"><span class="questionText"> 3</span><br>
        <input type="radio" name="in6" value="2"><span class="questionText"> 2</span><br>
        <input type="radio" name="in6" value="1"><span class="questionText"> 1 Not at all</span><br>
      </form>
      </form>
    </div>

    <div class="input-group" id="insta7" method="get">
      <form id="ins5user" >
        <span class="slideText">Are you committed to your organisation (e.g. high job satisfaction; a motivated employee who does not intend to leave)?</span><br><br>
        <input type="radio" name="in7" value="10"><span class="questionText"> 10 Very much so</span><br>
        <input type="radio" name="in7" value="9"><span class="questionText"> 9</span><br>
        <input type="radio" name="in7" value="8"><span class="questionText"> 8</span><br>
        <input type="radio" name="in7" value="7"><span class="questionText"> 7</span><br>
        <input type="radio" name="in7" value="6"><span class="questionText"> 6</span><br>
        <input type="radio" name="in7" value="5"><span class="questionText"> 5</span><br>
        <input type="radio" name="in7" value="4"><span class="questionText"> 4</span><br>
        <input type="radio" name="in7" value="3"><span class="questionText"> 3</span><br>
        <input type="radio" name="in7" value="2"><span class="questionText"> 2</span><br>
        <input type="radio" name="in7" value="1"><span class="questionText"> 1 Not at all</span><br>
      </form>
      </form>
      <form id="ins6user">
        <span class="slideText">Do you and your employer have a good psychological contract (e.g. keep promises; treated fairly; high commitment)? </span><br><br>
        <input type="radio" name="in8" value="10"><span class="questionText"> 10 Very much so</span><br>
        <input type="radio" name="in8" value="9"><span class="questionText"> 9</span><br>
        <input type="radio" name="in8" value="8"><span class="questionText"> 8</span><br>
        <input type="radio" name="in8" value="7"><span class="questionText"> 7</span><br>
        <input type="radio" name="in8" value="6"><span class="questionText"> 6</span><br>
        <input type="radio" name="in8" value="5"><span class="questionText"> 5</span><br>
        <input type="radio" name="in8" value="4"><span class="questionText"> 4</span><br>
        <input type="radio" name="in8" value="3"><span class="questionText"> 3</span><br>
        <input type="radio" name="in8" value="2"><span class="questionText"> 2</span><br>
        <input type="radio" name="in8" value="1"><span class="questionText"> 1 Not at all</span><br>
      </form>
      </form>
    </div>

    <div class="input-group" id="insta9" method="get">
      <form id="ins5user" >
        <span class="slideText">Do you have a high level of wellbeing (e.g. high satisfaction; a positive mood; happiness)?</span><br><br>
        <input type="radio" name="in9" value="10"><span class="questionText"> 10 Very much so</span><br>
        <input type="radio" name="in9" value="9"><span class="questionText"> 9</span><br>
        <input type="radio" name="in9" value="8"><span class="questionText"> 8</span><br>
        <input type="radio" name="in9" value="7"><span class="questionText"> 7</span><br>
        <input type="radio" name="in9" value="6"><span class="questionText"> 6</span><br>
        <input type="radio" name="in9" value="5"><span class="questionText"> 5</span><br>
        <input type="radio" name="in9" value="4"><span class="questionText"> 4</span><br>
        <input type="radio" name="in9" value="3"><span class="questionText"> 3</span><br>
        <input type="radio" name="in9" value="2"><span class="questionText"> 2</span><br>
        <input type="radio" name="in9" value="1"><span class="questionText"> 1 Not at all</span><br>
      </form>
      </form>
      <form id="ins6user">
        <span class="slideText">Do you have a low level of wellbeing (e.g. stress; anxiety; depression)?</span><br><br>
        <input type="radio" name="in10" value="10"><span class="questionText"> 10 Very much so</span><br>
        <input type="radio" name="in10" value="9"><span class="questionText"> 9</span><br>
        <input type="radio" name="in10" value="8"><span class="questionText"> 8</span><br>
        <input type="radio" name="in10" value="7"><span class="questionText"> 7</span><br>
        <input type="radio" name="in10" value="6"><span class="questionText"> 6</span><br>
        <input type="radio" name="in10" value="5"><span class="questionText"> 5</span><br>
        <input type="radio" name="in10" value="4"><span class="questionText"> 4</span><br>
        <input type="radio" name="in10" value="3"><span class="questionText"> 3</span><br>
        <input type="radio" name="in10" value="2"><span class="questionText"> 2</span><br>
        <input type="radio" name="in10" value="1"><span class="questionText"> 1 Not at all</span><br>
      </form>
      </form>
    </div>



    <div class="input-group" id="bronnen" method="get" onsubmit="return false;">
      <form id="brnnn">
        <span class="slideText">When naming the 25 names: do all names come from “your memory”, or have you used a saved list of contacts (for example via your mobile phone, your email, or Facebook)??</span><br><br>
        <input type="radio" name="br" value="1"><span class="questionText">  All names come from memory, and I did not use a contact list.</span><br>
        <input type="radio" name="br" value="2"><span class="questionText">  I used my mobile phone</span><br>
        <input type="radio" name="br" value="3"><span class="questionText">  I used my email</span><br>
        <input type="radio" name="br" value="4"><span class="questionText">  I used Facebook</span><br>
        <input type="radio" id="brcheckText" name="br" value="5"><span class="questionText">  I used something else, namely:</span>
        <input type="text" id="brtextInput" name="br">
      </form>
    </div>

    <div class="input-group" id="opmerkingen" method="get" onsubmit="return false;">
      <form id="opmrkngn">
        <span class="slideText">Do you have any comments about the questionnaire? If you have entered something by mistake, you can also report it here..</span><br><br>
        <textarea rows="10" cols="50" id="opmtextArea" name="opm"></textarea>
      </form>
    </div>

    <div class="input-group" id="afsluiting" method="get">
      <form id="afsltng">
        <span class="slideText">Thank you for completing the questionnaire</span><br><br>
        <span class="slideText">Click on the "LISS" button to return to your personal page. PLEASE DO NOT FORGET THIS: only then will your answers be saved and your reimbursement of £5 added.</span><br><br>
        <span class="slideText">You can also make a comment about the questionnaire there. You can also comment there if you have entered something wrong by mistake or you wish to specify individuals in your network who identify as a gender other than male or female.</span><br><br>
      </form>
    </div>

    <div class="popop_box" id="nonresponse_box">
      <div class="popup_box" id="popup">
            <p class="popup_text">You have not yet fully answered the question! It would be nice for the research if you answer the question completely. If you do want to go to the next question, you can click "Continue" again.</p>
            <button class="btn btn-default" onclick="closePopup()">Close</button>
      </div>
    </div>

    <div class="popop_box" id="onlyone_box">
      <div class="popup_box" id="onlyOnePopup">
            <p class="popup_text">Enter a name.</p>
            <button class="btn btn-default" onclick="closeOnlyOnePopup()">Close</button>
      </div>
    </div>

    <div class="popop_box" id="fewAlters_box">
      <div class="popup_box" id="alterPopup">
            <p class="popup_text">Have you finished listing people? Please also list anyone who is especially close to you who you have not yet listed and may not have been in contact with in the last month, before proceeding to the next question. If you can no longer come up with names, you can continue with the questionnaire, simply close this prompt and press 'continue' once more.</p>
            <button class="btn btn-default" onclick="closeAlterPopup()">Close</button>
      </div>
    </div>

    <div class="popop_box" id="reminderAlters_box">
      <div class="popup_box" id="reminderPopup">
            <p class="popup_text">If you have trouble naming names, you may be able to consult your contact book from your phone, or your email, or via Facebook or a similar website.</p>
            <button class="btn btn-default" onclick="closeReminderPopup()">Close</button>
      </div>
    </div>

    <div class="popop_box" id="fewDragged_box">
      <div class="popup_box" id="dragPopup">
            <p class="popup_text">You have not answered this question for every person in your network. It would very helpful for our research if you did. Please feel free to either give an answer or to go to the next question by clicking ‘Next’ again.”.</p>
            <button class="btn btn-default" onclick="closeDragPopup()">Close</button>
      </div>
    </div>

    <div id="NextDiv">
      <input type="button"
        class="btn btn-default"
        value="Continue"
        id="Next"
        onclick="showNext();pauseShowNext();" />
    </div>

    <div id="submitForm">
      <form method="POST" action="<?php echo $_POST['returnpage']; ?>">
        <input type="hidden" name="nomem" value="<?php echo $_POST['nomem']; ?>">
        <input type="hidden" name="sh" value="<?php echo $_POST['sh']; ?>">
        <input type="hidden" name="lsi" value="<?php echo $_POST['lsi']; ?>">
        <input type="hidden" name="pli" value="<?php echo $_POST['pli']; ?>">
        <input type="hidden" name="spi" value="<?php echo $_POST['spi']; ?>">
        <input type="hidden" name="aqi" value="<?php echo $_POST['aqi']; ?>">
        <input type="hidden" name="cqi" value="<?php echo $_POST['cqi']; ?>">
        <input type="hidden" name="<?php echo $_POST['varname1']; ?>" value=""> <!-- Value leeg laten. -->
        <input type="hidden" name="<?php echo $_POST['statusvarname1']; ?>" value="<?php echo $_POST['statusvarvalue1']; ?>">

        <input type="submit" name="<?php echo $_POST['nextvarname']; ?>" value="LISS" class="btn btn-default" /><!-- Value kan ook Volgende zijn, net wat past in jouw vragenlijst. -->
      </form>
    </div>

    <script type="text/javascript">
        $("#Next").css("left",window.innerWidth * .8);
        $("#submitButton").css("left",window.innerWidth * .8);
    </script>
  </body>
</html>
