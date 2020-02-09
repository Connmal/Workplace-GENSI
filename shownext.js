// ---------------------------------------------------------------------------------------
// showNext(): Prepares for next slide in survey. Hides previous slide and shows currSlide,
// performing whatever operations needed for preparing slide.
// A bit like the main() function
// ---------------------------------------------------------------------------------------

//Mix of Dutch and English, will annotate each call to show which document its being called.
function showNext() {


  if (currSlide == 1) {
    var d = new Date();
    startTime = d.getTime();

    // respondent ID
    answers.nomem = $('input[name=nomem]').val();


        document.getElementById("Next").style.position="absolute";
        document.getElementById("slide0").style.display = "none"; //Called from slides.js
        document.getElementById("slide1").style.display = "block";
        currSlide+= 0.1;

      } else if (currSlide == 1.1) {
               document.getElementById("slide1").style.display = "none";
               document.getElementById("slide2").style.display = "block"

               currSlide+= 0.2;


      } else if (currSlide == 1.3) {
          document.getElementById("slide2").style.display = "none"
          var ex = document.getElementById("code_input");
          ex.style.left = string_l + "px";
          ex.style.top = string_t;
          ex.style.display = "block";
          checked = false;

          currSlide += 0.2;


      } else if (currSlide == 1.5) {
          if (($('input[name=code]:checked').val() == 1 && $('input#codetextInput').val() == "") || ($('input[name=code]:checked').length == 0) && !checked) {
            promptNonresponse();
            checked = true;
          } else {
            // Collect data before going on
            answers.q18 = $('input[name=code]:checked').val();
            if ($('input[name=code]:checked').val() == 1) answers.q18 += ":" + $('input#codetextInput').val();
            var d = new Date();
            answers.q18timeStamp = (d - startTime) / 1000;
              // Collect data before going on

           document.getElementById("code_input").style.display = "none";



    d3.selectAll(".node").attr("display", "block");
    d3.selectAll(".node").on('mousedown.drag', null);
    // Q3: The following questions are about people with whom you discuss important matters

    document.getElementById("slide3").style.display = "block";  //Called from slides.js
    document.getElementById("name_input").style.display = "inline-flex";
    document.getElementById("name_input").style.left = string_l + "px";

    for(i = 1;i <= 25;i++) {
      var d = new Date();
      var node = {name: i,
                  id: i,
                  timeStamp:(d - startTime) / 1000,
                  gender:"female",
                  xx:(bodyWidth/25)+(bodyWidth/26*(i-1)),
                  yy:((bodyWidth/25)+(bodyWidth/26)<125)?nodeLine+(i % 3)*40:nodeLine+(i % 2)*40,
                  x:(bodyWidth/25)+(bodyWidth/26*(i-1)),
                  y:((bodyWidth/25)+(bodyWidth/26)<125)?nodeLine+(i % 3)*40:nodeLine+(i % 2)*40};
      var focus = {id: i,
                   x:i*(bodyWidth/25)-(bodyWidth/25)/2,
                   y:((bodyWidth/25)+(bodyWidth/26)<125)?nodeLine+(i % 3)*40:nodeLine+(i % 2)*40};
      n = nodes.push(node);
      f = foci.push(focus);
    }

    setTimeout(function() {
      if(currSlide == 1.5) {
        alterPromptReminder();
      }
    },900000);

    restart();
    d3.selectAll(".node").attr("opacity", "0.4");

    currSlide += 0.5;
  }
  } else if (currSlide == 2) {
    if (numAlters < 25 && checked == false) {
      checked = numAlters < 1 ? false : true;
      alterPromptNonresponse();
    } else {
      checked = false;

      //nodes.splice(numAlters+1,nodes.length-numAlters);
      nodes.forEach(function(d) {
        if (d.id > numAlters) {
          d.name = undefined;
          d.gender = undefined;
          answers["q19_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = d.name;
          var qd = new Date();
          answers["q19_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2}) + "timeStamp"] = (qd - startTime) / 1000;
        }
      });
      resetFoci();

      document.getElementById("slide3").style.display = "none";  //Called from slides.js
      document.getElementById("name_input").style.display = "none";  //Called from index.php

      resetFoci();
      currSlide++;
      setTimeout(function() {
        showNext();
      },1000);

    }

  } else if (currSlide == 3) {
    if (askedAbout > 0 && $('input[name=gA]:checked').length == 0 && !checked) {
      promptNonresponse();
      checked = true;
    } else {


      if (askedAbout > 0) {
        // Collect data before going on
        answers["q20_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = $('input[name=gA]:checked').val();

        document.getElementById("question1_" + askedAbout + "_window").style.display = "none";
        document.getElementById("backdrop1_" + askedAbout).style.display = "none";
        document.getElementById("question1_" + askedAbout).style.display = "none";
      } else {
        document.getElementById("genderalter").style.display = "block"; //Called from index.php
      }

      if (askedAbout == numAlters) {
        // Collect data before going on
        nodes.forEach(function(d) {
          if (d.id > numAlters) {
            answers["q20_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          }
        });
        var d = new Date();
        answers["q20timeStamp"] = (d - startTime) / 1000;

        askedAbout = 0;
        currSlide += 0.5;
        //skipped = true;
        showNext();
      } else {
        askedAbout++;

        checked = false;
        refreshRadio();

        d3.selectAll(".node").attr("opacity", function(d) { return d.index == askedAbout ? 1 : .4 });

        currNode = nodes[askedAbout];

        d3.select("svg").append("rect")
          .attr("class", "q_window")
          .attr("id", "question1_" + askedAbout + "_window")
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("width", q_window_width)
          .attr("height", q_window_height)
          .attr("x", currNode.x - q_window_width / 2)
          .attr("y", currNode.y - q_window_height / 2);

        d3.select("svg").append("rect")
          .attr("class", "backdrop")
          .attr("id", "backdrop1_" + askedAbout)
          .attr("x", (currNode.x - 142 + 500 > bodyWidth) ? bodyWidth - 500 : Math.max(currNode.x - q_window_width / 2 - 110,0))
          .attr("y", currNode.y - 360)
          .attr("width", backdrop_width)
          .attr("height", 210);

        d3.select("svg").append("text")
          .attr("class", "slideText")
          .attr("id", "question1_" + askedAbout)
          .attr("x", (currNode.x - 142 + 500 > bodyWidth) ? bodyWidth - 490 : Math.max(currNode.x - q_window_width / 2 - 100,10))
          .attr("dy", currNode.y - 340)
          .text("What is the gender of " + nodes[askedAbout].name.toUpperCase() + "? If you're unsure how they identify, please provide your best guess.")
          .call(wrap, backdrop_width - 20);
// This part allows us to input the name they entered into the question line so it is customary for each alter.
        drawBox(currNode);
      }
    }

  } else if (currSlide == 3.5) {
    if (askedAbout > 0 && $('input[name=lA]:checked').length == 0 && !checked) {
      promptNonresponse();
      checked = true;
    } else {

      if (askedAbout > 0) {
        // Collect data before going on
        answers["q21_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = $('input[name=lA]:checked').val();

        document.getElementById("question1.5_" + askedAbout + "_window").style.display = "none";
        document.getElementById("backdrop1.5_" + askedAbout).style.display = "none";
        document.getElementById("question1.5_" + askedAbout).style.display = "none";
      } else {
        document.getElementById("genderalter").style.display = "none";
        document.getElementById("leeftijdAlter").style.display = "block"; //Called from index.php this is calling the HTML for the age ticky boxes
      }

      if (askedAbout == numAlters) {
        // Collect data before going on
        nodes.forEach(function(d) {
          if (d.id > numAlters) {
            answers["q21_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          }
        });
        var d = new Date();
        answers["q21timeStamp"] = (d - startTime) / 1000;

        askedAbout = 0;
        currSlide += 0.5;
        //skipped = true;
        showNext();
      } else {
        askedAbout++;

        checked = false;
        refreshRadio();

        d3.selectAll(".node").attr("opacity", function(d) { return d.index == askedAbout ? 1 : .4 });

        currNode = nodes[askedAbout];

        d3.select("svg").append("rect")
          .attr("class", "q_window")
          .attr("id", "question1.5_" + askedAbout + "_window")
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("width", q_window_width)
          .attr("height", q_window_height)
          .attr("x", currNode.x - q_window_width / 2)
          .attr("y", currNode.y - q_window_height / 2);

        d3.select("svg").append("rect")
          .attr("class", "backdrop")
          .attr("id", "backdrop1.5_" + askedAbout)
          .attr("x", (currNode.x - 142 + 500 > bodyWidth) ? bodyWidth - 500 : Math.max(currNode.x - q_window_width / 2 - 110,0))
          .attr("y", currNode.y - 360)
          .attr("width", backdrop_width)
          .attr("height", 360);

        d3.select("svg").append("text")
          .attr("class", "slideText")
          .attr("id", "question1.5_" + askedAbout)
          .attr("x", (currNode.x - 142 + 500 > bodyWidth) ? bodyWidth - 490 : Math.max(currNode.x - q_window_width / 2 - 100,10))
          .attr("dy", currNode.y - 340)
          .text("What is the age of " + nodes[askedAbout].name.toUpperCase() + "? It is no problem if you don't know exactly. Please provide your best estimate.")
          .call(wrap, backdrop_width - 20);

        drawBox(currNode);
      }
      // This part allows us to input the name they entered into the question line so it is customary for each alter.
    }
  } else if (currSlide == 4) {
    if (askedAbout > 0 && ($('input[name=rA]:checked').length == 0 || ($('input[name=rA]:checked').val() == 14 && $('input#rAtextInput').val() == "")) && !checked) {
      promptNonresponse();
      checked = true;
    } else {

      if (askedAbout == 0) {
        document.getElementById("question1.5_" + numAlters + "_window").style.display = "none";
        document.getElementById("backdrop1.5_" + numAlters).style.display = "none";
        document.getElementById("question1.5_" + numAlters).style.display = "none";

        document.getElementById("leeftijdAlter").style.display = "none";
        document.getElementById("relatieAlter").style.display = "block"; //This is called from index.php and asks the relationship the alter gholds to the participant
      } else {
        // Collect data before going on
        answers["q22_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;

        for(i = 0;i < $('input[name=rA]:checked').length; i++) {
          if (answers["q22_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] == undefined) {
            answers["q22_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = $('input[name=rA]:checked')[i].value;
          } else {
            answers["q22_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] += ", " + $('input[name=rA]:checked')[i].value;
          }
          if ($('input[name=rA]:checked')[i].value == 14) answers["q22_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] += ":" + $('input#rAtextInput').val();
        }

        document.getElementById("question2_" + askedAbout + "_window").style.display = "none";
        document.getElementById("backdrop2_" + askedAbout).style.display = "none";
        document.getElementById("question2_" + askedAbout).style.display = "none";
      }

      if (askedAbout == numAlters) {
        // Collect data before going on
        nodes.forEach(function(d) {
          if (d.id > numAlters) {
            answers["q22_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          }
        });
        var d = new Date();
        answers["q22timeStamp"] = (d - startTime) / 1000;

        askedAbout = 0;
        currSlide += 1;
        //skipped = true;
        checked = false;
        showNext();
      } else {
        askedAbout++;

        checked = false;
        refreshRadio();

        d3.selectAll(".node").attr("opacity", function(d) { return d.index == askedAbout ? 1 : .4 });

        currNode = nodes[askedAbout];

        d3.select("svg").append("rect")
          .attr("class", "q_window")
          .attr("id", "question2_" + askedAbout + "_window")
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("width", q_window_width)
          .attr("height", q_window_height)
          .attr("x", currNode.x - q_window_width / 2)
          .attr("y", currNode.y - q_window_height / 2);

        d3.select("svg").append("rect")
          .attr("class", "backdrop")
          .attr("id", "backdrop2_" + askedAbout)
          .attr("x", (currNode.x < center) ? currNode.x + 50 : currNode.x - 550)
          .attr("y", currNode.y - 350)
          .attr("width", backdrop_width)
          .attr("height", 480);

        d3.select("svg").append("text")
          .attr("class", "slideText")
          .attr("id", "question2_" + askedAbout)
          .attr("x", (currNode.x < center) ? currNode.x + 60 : currNode.x - 250)
          .attr("dy", currNode.y - 330)
          .text("What is your relationship to " + nodes[askedAbout].name.toUpperCase() + "? Entering multiple answers is possible!")
          .call(wrap, backdrop_width - 20);
// This part allows us to input the name they entered into the question line so it is customary for each alter.
        drawBox(currNode);
      }
    }
  } else if (currSlide == 5) {
    document.getElementById("relatieAlter").style.display = "none";
    document.getElementById("Next").style.left = "";
    document.getElementById("Next").style.top = "";

    document.getElementById("slide5").style.display = "block"; //this is caled from slides.js
    document.getElementById("fiveBar").style.display = "block"; //This is teling it how many bars to use (In the slides.js you can chose between 4,5 and 6 but could easily be altered to include more.)
    document.getElementById("labelBar1").style.display = "block"; //Contents of the bars. (labels)

    d3.selectAll(".node").attr("opacity", function(d) { return d.index == 0 ? .4 : 1 });
    clearColors();
    restart();

    d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});
    setTimeout(function() {
      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = true});
    },1000);

    currSlide++;
  } else if (currSlide == 6) {
    // If user has not selected an option, alert with popup
    if (!altersInBoxes() && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      saveAltersInBoxes(23);
      var d = new Date();
      answers.q23timeStamp = (d - startTime) / 1000;

      checked = false;

      document.getElementById("slide5").style.display = "none";
      document.getElementById("labelBar1").style.display = "none";

      // Q4: How close is your relationship with each person?

      document.getElementById("slide6").style.display = "block";
      document.getElementById("labelBar2").style.display = "block"; //Contents of the bars. (labels), assumes 'fivebar' (as above) until this is dismissed and another is called

      restart();

      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});
      setTimeout(function() {
        d3.selectAll(".node").classed("fixed", function(d) { d.fixed = true});
      },1000);

      currSlide++;
    }
  } else if (currSlide == 7) {
    // If user has not selected an option, alert with popup
    if (!altersInBoxes() && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      saveAltersInBoxes(24);
      var d = new Date();
      answers.q24timeStamp = (d - startTime) / 1000;

      checked = false;

      document.getElementById("slide6").style.display = "none"; //Called form slides.js
      document.getElementById("labelBar2").style.display = "none";

      // Q4: How close is your relationship with each person?

      document.getElementById("slide7").style.display = "block"; //Called form slides.js
      document.getElementById("labelBar3").style.display = "block";//Contents of the bars. (labels), assumes 'fivebar' (as above) until this is dismissed and another is called

      restart();

      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});
      setTimeout(function() {
        d3.selectAll(".node").classed("fixed", function(d) { d.fixed = true});
        d3.selectAll(".link").attr("display", "none");
        d3.selectAll(".node").attr("opacity", function(d) { return d.index == 0 ? .4 : 1 });
      },1000);

      currSlide++;
    }
  } else if (currSlide == 8) {
    // If user has not selected an option, alert with popup
    if (!altersInBoxes() && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      saveAltersInBoxes(25);
      var d = new Date();
      answers.q25timeStamp = (d - startTime) / 1000;

      checked = false;
      document.getElementById("slide7").style.display = "none";

      // Q4: How close is your relationship with each person?

      document.getElementById("slide8").style.display = "block"; //Calls from slides.js
      clearColors();
      restart();

      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});
      setTimeout(function() {
        d3.selectAll(".node").classed("fixed", function(d) { d.fixed = true});
        d3.selectAll(".link").attr("display", "none");
        d3.selectAll(".node").attr("opacity", function(d) { return d.index == 0 ? .4 : 1 });
      },1000);

      currSlide++;
    }
  } else if (currSlide == 9) {
    // If user has not selected an option, alert with popup
    if (!altersInBoxes() && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      saveAltersInBoxes(26);
      var d = new Date();
      answers.q26timeStamp = (d - startTime) / 1000;

      checked = false;

      document.getElementById("slide8").style.display = "none";
      document.getElementById("fiveBar").style.display = "none";
      document.getElementById("labelBar3").style.display = "none";

      // : Who of these are your friends?

      document.getElementById("slide15").style.display = "block"; //calls from slides.js
      d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});

      clearColors();

      currSlide+=0.2;
    }
  } else if (currSlide == 9.2) {
    if (!altered && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      nodes.forEach(function(d) {
        if (d.id > 0) answers["q27_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = d.friends;
      });
      var d = new Date();
      answers.q27timeStamp = (d - startTime) / 1000;

      checked = false;
      altered = false;

      document.getElementById("slide15").style.display = "none";
      document.getElementById("slide9").style.display = "block"; //Calls from slides.js

      resetFoci();
      clearColors();

      currSlide+=0.3;

      /*setTimeout(function() {
        showNext();
      },1000);*/
    }
  } else if (currSlide == 9.5) {
    if (!altered && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      nodes.forEach(function(d) {
        if (d.id > 0) answers["q28_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = d.kids;
      });
      var d = new Date();
      answers.q28timeStamp = (d - startTime) / 1000;

      checked = false;
      altered = false;

      document.getElementById("slide9").style.display = "none";
      document.getElementById("kinderenAlter").style.display = "block"; //These (kindren/leeftijkind) are the ticky boxes for whether the alter follow them on instagram or not.
      document.getElementById("leeftijdKindAlter").style.display = "block";

      resetFoci();

      currSlide+=0.5;

      setTimeout(function() {
        showNext();
      },1000);
    }
  } else if (currSlide == 10) {
    if (askedAbout > 0 && lastAskedAbout > 0 && askedAbout-1 <= numAlters && ($('input[name=kA]:checked').length == 0 || $('input[name=lkA]:checked').length == 0) && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      if (lastAskedAbout > 0) {
        document.getElementById("question3_" + lastAskedAbout + "_window").style.display = "none";
        document.getElementById("backdrop3_" + lastAskedAbout).style.display = "none";
        document.getElementById("question3_" + lastAskedAbout).style.display = "none";
        document.getElementById("question4_" + lastAskedAbout).style.display = "none";
      }

      if (askedAbout > 0) {
        if(nodes[askedAbout].kids == "Yes") {
          // Collect data before going on
          answers["q29_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = $('input[name=kA]:checked').val();
          answers["q30_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = $('input[name=lkA]:checked').val();
        } else {
          answers["q29_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          answers["q30_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
        }
      }

      if (askedAbout == numAlters) {
        // Collect data before going on
        nodes.forEach(function(d) {
          if (d.id > numAlters) {
            answers["q29_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
            answers["q30_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          }
        });

        var d = new Date();
        answers["q29_30timeStamp"] = (d - startTime) / 1000;

        document.getElementById("kinderenAlter").style.display = "none";
        document.getElementById("leeftijdKindAlter").style.display = "none";

        askedAbout = 0;
        lastAskedAbout = 0;
        currSlide += 6;

        //skipped = true;
        checked = false;
        showNext();
      } else {
        askedAbout++;

        if (nodes[askedAbout].kids != "Yes") {
          answers["q29_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
          answers["q30_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;

            showNext();
        } else {
          checked = false;
          refreshRadio();

          d3.selectAll(".node").attr("opacity", function(d) { return d.index == askedAbout ? 1 : .4 });

          lastAskedAbout = askedAbout;

          currNode = nodes[askedAbout];

          d3.select("svg").append("rect")
            .attr("class", "q_window")
            .attr("id", "question3_" + askedAbout + "_window")
            .attr("rx", 2)
            .attr("ry", 2)
            .attr("width", q_window_width)
            .attr("height", q_window_height)
            .attr("x", currNode.x - q_window_width / 2)
            .attr("y", currNode.y - q_window_height / 2);

          d3.select("svg").append("rect")
            .attr("class", "backdrop")
            .attr("id", "backdrop3_" + askedAbout)
            .attr("x", (currNode.x < center) ? currNode.x + 50 : currNode.x - 580)
            .attr("y", currNode.y - 350)
            .attr("width", backdrop_width + 30)
            .attr("height", 560);

          d3.select("svg").append("text")
            .attr("class", "slideText")
            .attr("id", "question3_" + askedAbout)
            .attr("x", (currNode.x < center) ? currNode.x + 60 : currNode.x - 570)
            .attr("dy", currNode.y - 330)
            .text("Was " + currNode.name.toUpperCase() + "'s support helpful?")
            .call(wrap, backdrop_width + 10);

          d3.select("svg").append("text")
            .attr("class", "slideText")
            .attr("id", "question4_" + askedAbout)
            .attr("x", (currNode.x < center) ? currNode.x + 60 : currNode.x - 570)
            .attr("dy", currNode.y - 70)
            .text("Would " + currNode.name.toUpperCase() + " come to you for social support?")
            .call(wrap, backdrop_width + 10);
// This part allows us to input the name they entered into the question line so it is customary for each alter.
          drawBox(currNode);
        }
      }
    }
  } else if (currSlide == 16) {
    document.getElementById("Next").style.left = "";
    document.getElementById("Next").style.top = "";

    // Q4: How close is your relationship with each person?


    d3.selectAll(".node").classed("fixed", function(d) { d.fixed = false});

    var n = numAlters,      // number of child nodes
        r = 235      // radius

    for (var i=1; i<=numAlters; i++) {
      var theta = (i / numAlters * Math.PI * 2) - 2;
      foci[i].ox = foci[i].x;
      if(numAlters < 18) {
        foci[i].x = center + r*Math.cos(theta);
      } else {
        foci[i].x = center + ((i % 2)?1.15*r:r)*Math.cos(theta);
      }
      foci[i].oy = foci[i].y;
      if(numAlters < 18) {
        foci[i].y = 500 + r*Math.sin(theta);
      } else {
        foci[i].y = 500 + ((i % 2)?1.15*r:r)*Math.sin(theta);
      }
    }

      /*foci[i].x = center + ((numAlters<20)?r:((i % 2)*0.8)*r)*Math.cos(theta);
      foci[i].oy = foci[i].y;
      foci[i].y = 500 + ((numAlters<20)?r:((i % 2)*0.8)*r)*Math.sin(theta);*/

    restart();
    clearColors();

document.getElementById("slide14").style.display = "block";

    currSlide++;
    setTimeout(function() {
      showNext();
    },1000);


  } else if (currSlide == 17) {


    // Q4: How close is your relationship with each person?

  d3.selectAll(".node").attr("opacity", function(d) { return d.index == askedAbout ? 1 : 1 });

    if (askedAbout > 0) {
      answers["q36_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
      for (i = 1; i <= numAlters; i++) {
        if(nodes[askedAbout][i] == 1) {
          if(answers["q36_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] == undefined) {
            answers["q36_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] = i;
          } else {
            answers["q36_" + askedAbout.toLocaleString(undefined,{minimumIntegerDigits: 2})] += ", " + i;
          }
        }
      }

      foci[askedAbout].x = foci[askedAbout].px
      foci[askedAbout].y = foci[askedAbout].py

      links.splice(0,links.length);
      d3.selectAll(".node").attr("opacity", function(d) { return d.index <= askedAbout ? 0 : 1 });
    }

    if (askedAbout+1 == numAlters) {
      // Collect data before going on
      nodes.forEach(function(d) {
        if (d.id > numAlters-1) {
          answers["q36_" + d.id.toLocaleString(undefined,{minimumIntegerDigits: 2})] = undefined;
        }
      });

      var d = new Date();
      answers["q36timeStamp"] = (d - startTime) / 1000;

      /*for (var i=1; i<=numAlters; i++) {
        foci[i].x = foci[i].ox;
        foci[i].y = foci[i].oy;
      }*/
      d3.selectAll(".node").attr("display", "none");
      d3.selectAll(".link").attr("display", "none");

     document.getElementById("slide14").style.display = "none";
     var ex = document.getElementById("age_input");
     ex.style.left = string_l + "px";
     ex.style.top = string_t;
     ex.style.display = "block";

      askedAbout = 0;
      currSlide += 0.3;
      checked = false;

      /*if (answers.q07 != "Yes") {
        skipped = true;
        showNext();
      }*/
    } else {
      askedAbout++;

      currNode = nodes[askedAbout];

      $("#contactMet1").text("When it comes to " + currNode.name.toUpperCase());
      $("#contactMet2").text("With who does " + currNode.name.toUpperCase() + " have contact? By contact we mean all forms of contact, such as personal contact, contact via (mobile) telephone, mail, email, sms, and other ways of online and offline communication.");
      d3.selectAll("#contactMet2").call(wrap, textWidth);
      $("#contactMet3").attr("y", text_offset_top + lineHeight * ($('#slide14 .slideText tspan').length + $('#slide14 .slideText').length-1))
// This part allows us to input the name they entered into the question line so it is customary for each alter. (specifically for showing who knows who. Allowing participants to more easily and reliably show each of th ties)
      foci[askedAbout].px = foci[askedAbout].x
      foci[askedAbout].py = foci[askedAbout].y

      foci[askedAbout].x = center;
      foci[askedAbout].y = 500;

      restart();
    }



} else if (currSlide == 17.3) {
  if (($('input[name=age]:checked').val() == 1 && $('input#agetextInput').val() == "") || ($('input[name=age]:checked').length == 0) && !checked) {
    promptNonresponse();
    checked = true;
  } else {
    // Collect data before going on
    answers.q36_A = $('input[name=age]:checked').val();
    if ($('input[name=age]:checked').val() == 1) answers.q36_A += ":" + $('input#agetextInput').val();
    var d = new Date();
    answers.q36_AtimeStamp = (d - startTime) / 1000;
      // Collect data before going on


        document.getElementById("age_input").style.display = "none";
        var ex = document.getElementById("gender_input");
        ex.style.left = string_l + "px";
        ex.style.top = string_t;
        ex.style.display = "block";


        currSlide+= 0.2;

}
} else if (currSlide == 17.5) {

      if (($('input[name=gender]:checked').length == 0)  && !checked && !skipped) {
        promptNonresponse();
        checked = true;
      } else {
        // Collect data before going on
        if(!skipped) {
          answers.q36_B = $('input[name=gender]').val();
          var d = new Date();
          answers.q36_BtimeStamp = (d - startTime) / 1000;
        } else {
          answers.q36_B = "skipped";
        }

        // Collect data before going on



        document.getElementById("gender_input").style.display = "none";

     var ex = document.getElementById("nation_input");
     ex.style.left = string_l + "px";
     ex.style.top = string_t;
     ex.style.display = "block";


     currSlide += 0.2;
   }

 } else if (currSlide == 17.7) {
   if (($('input[name=nation]:checked').val() == 4 && $('input#nationtextInput').val() == "") || ($('input[name=nation]:checked').length == 0) && !checked) {
     promptNonresponse();
     checked = true;
   } else {
     // Collect data before going on
     answers.q36_D = $('input[name=nation]:checked').val();
     if ($('input[name=nation]:checked').val() == 4) answers.q36_D += ":" + $('input#nationtextInput').val();
     var d = new Date();
     answers.q36_DtimeStamp = (d - startTime) / 1000;
       // Collect data before going on

     document.getElementById("nation_input").style.display = "none";
     var ex = document.getElementById("education_input");
     ex.style.left = string_l + "px";
     ex.style.top = string_t;
     ex.style.display = "block";


     currSlide+= 0.1;

}
} else if (currSlide == 17.8) {

   if (($('input[name=education]:checked').length == 0)  && !checked && !skipped) {
     promptNonresponse();
     checked = true;
   } else {
     // Collect data before going on
     if(!skipped) {
       answers.q36_E = $('input[name=education]').val();
       var d = new Date();
       answers.q36_EtimeStamp = (d - startTime) / 1000;
     } else {
       answers.q36_E = "skipped";
     }

     // Collect data before going on

  document.getElementById("education_input").style.display = "none";

      var ex = document.getElementById("insta1");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide+= 1.2;
    }
  } else if (currSlide == 19) {
    if (($('input[name=in1]:checked').length == 0 || $('input[name=in2]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q37a = $('input[name=in1]:checked').val();
        answers.q37b = $('input[name=in2]:checked').val();
        var d = new Date();
        answers.q37timeStamp = (d - startTime) / 1000;
      } else {
        answers.q37a = "skipped";
        answers.q37b = "skipped";
        var d = new Date();
        answers.q37timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on
// Instagram Questions signified by the 'in(number)' Called from the index.php 2 questions per page

      document.getElementById("insta1").style.display = "none";
      var ex = document.getElementById("insta3");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 20) {
    if (($('input[name=in3]:checked').length == 0 || $('input[name=in4]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q38a = $('input[name=in3]:checked').val();
        answers.q38b = $('input[name=in4]:checked').val();
        var d = new Date();
        answers.q38timeStamp = (d - startTime) / 1000;
      } else {
        answers.q38a = "skipped";
        answers.q38b = "skipped";
        var d = new Date();
        answers.q38timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("insta3").style.display = "none";
      var ex = document.getElementById("insta5");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 21) {
    if (($('input[name=in5]:checked').length == 0 || $('input[name=in6]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q39a = $('input[name=in5]:checked').val();
        answers.q39b = $('input[name=in6]:checked').val();
        var d = new Date();
        answers.q39timeStamp = (d - startTime) / 1000;
      } else {
        answers.q39a = "skipped";
        answers.q39b = "skipped";
        var d = new Date();
        answers.q39timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("insta5").style.display = "none";
      var ex = document.getElementById("insta7");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 22) {
    if (($('input[name=in7]:checked').length == 0 || $('input[name=in8]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q40a = $('input[name=in7]:checked').val();
        answers.q40b = $('input[name=in8]:checked').val();
        var d = new Date();
        answers.q40timeStamp = (d - startTime) / 1000;
      } else {
        answers.q40a = "skipped";
        answers.q40b = "skipped";
        var d = new Date();
        answers.q40timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("insta7").style.display = "none";
      var ex = document.getElementById("insta9");
      ex.style.left = string_l + "px";
      ex.style.top = string_t;
      ex.style.display = "block";

      checked = false;

      currSlide++;
    }
  } else if (currSlide == 23) {
    if (($('input[name=in9]:checked').length == 0 || $('input[name=in10]:checked').length == 0) && !checked && !skipped) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      if(!skipped) {
        answers.q41a = $('input[name=in9]:checked').val();
        answers.q41b = $('input[name=in10]:checked').val();
        var d = new Date();
        answers.q41timeStamp = (d - startTime) / 1000;
      } else {
        answers.q41a = "skipped";
        answers.q41b = "skipped";
        var d = new Date();
        answers.q41timeStamp = (d - startTime) / 1000;
      }
      // Collect data before going on


      document.getElementById("insta9").style.display = "none";

        var ex = document.getElementById("bronnen");
        ex.style.left = string_l + "px";
        ex.style.top = string_t;
        ex.style.display = "block";

        checked = false;


      currSlide++;
    }
  } else if (currSlide == 24) {
    if (($('input[name=br]:checked').val() == 5 && $('input#brtextInput').val() == "") || ($('input[name=br]:checked').length == 0) && !checked) {
      promptNonresponse();
      checked = true;
    } else {
      // Collect data before going on
      answers.q42 = $('input[name=br]:checked').val();
      if ($('input[name=br]:checked').val() == 5) answers.q57_5 += ":" + $('input#brtextInput').val();
      var d = new Date();
      answers.q42_5timeStamp = (d - startTime) / 1000;

      document.getElementById("bronnen").style.display = "none";

        // Collect data before going on

      document.getElementById("prol_input").style.display = "none";

      document.getElementById("NextDiv").style.display = "none";
      document.getElementById("submitForm").style.display = "block";
      currSlide++;

      showNext();
    }
  } else if (currSlide == 25) {
    // Single array containing all answers
    var answer = [];
    for (var i in answers) {
      if (answers[i] == undefined) answers[i] = "nonresponse";
      answer.push(answers[i]);
    }

    console.log(answers);
    console.log(answer)
    //Post collected data to handler for recording server-side
    $.post("save_results.php", { a: answer });

    //Download CSV file client-side
    /*var csvString = answer.join(",");
    var a         = document.createElement('a');
    a.href        = 'data:attachment/csv;charset=utf-8;base64,' + window.btoa(csvString + "\n");
    a.target      = '_blank';
    a.download    = 'data.csv';

    document.body.appendChild(a);
    a.click();*/

    currSlide++;
    showNext();

  } else if (currSlide == 26) {

    document.getElementById("slide16").style.display = "block";
    document.getElementById("submitForm").style.display = "none";
    document.getElementById("Next").style.display = "none";
  }



    // Release window close-prevention
    unhook();


  $('#Next').blur();
}
