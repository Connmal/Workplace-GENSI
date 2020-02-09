//--------------------------------
// Declaration of slides and boxes
//--------------------------------

// Slide 0

// Catch Internet Explorer users; incompatible browser
if (isIE()) {
  var slide0 = d3.select("svg").append("g")
    .attr("id", "slide0");
  slide0.append("rect")
    .style("fill", "white")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", bodyWidth)
    .attr("height", bodyHeight);
  slide0.append("text")
    .attr("class", "lead")
    .text("Your browser is not supported.")
    .attr("x", center - 170)
    .attr("y", title_offset_top);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight)
    .text("Please us a different browser for this survey.")
    .call(wrap, textWidth);

} else {
  var slide0 = d3.select("svg").append("g")
    .attr("id", "slide0");
  slide0.append("rect")
    .style("fill", "white")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", bodyWidth)
    .attr("height", bodyHeight);
  slide0.append("text")
    .attr("class", "lead")
    .text("")
    .attr("x", center - 170)
    .attr("y", title_offset_top);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight)
    .text("This is a survey looking at social networks in the workplace.")
    .call(wrap, textWidth);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight * ($('#slide0 .slideText tspan').length + $('#slide0 .slideText').length))
    .text("It is not possible to move back to an earlier question.")
    .call(wrap, textWidth);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight * ($('#slide0 .slideText tspan').length + $('#slide0 .slideText').length))
    .text("Completing the survey takes 15 minutes. Please read the questions carefully and not to leave the page before all questions are answered.")
    .call(wrap, textWidth);
  slide0.append("text")
    .attr("class", "slideText")
    .attr("x", center - textWidth / 2)
    .attr("y", text_offset_top + title_offset_top + lineHeight * ($('#slide0 .slideText tspan').length + $('#slide0 .slideText').length))
    .text("As already mentioned, you cannot return to your previous answers, so check your answers carefully before moving on to the next question. If you have entered a wrong answer, you can probably write it on a piece of paper. At the end of the questionnaire you will still have the opportunity to report what you have entered incorrectly by mistake.")
    .call(wrap, textWidth);
}
var slide_1 = d3.select("svg").append("g")
  .attr("id", "slide1")
slide_1.append("rect")
  .style("fill", "white")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight)
  .text("Please read the following slide before continuing. Clicking 'Continue' demonstrates you have read and understood the information below.")
  .call(wrap, textWidth);
slide_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 4)
  .text("PARTICIPANT INFORMATION.")
  .call(wrap, textWidth);
slide_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 8)
  .text("You are being invited to take part in this research study.  Before you decide it is important for you to read this slide so you understand why the study is being carried out and what it will involve.")
  .call(wrap, textWidth);
slide_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 3)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 12)
  .text("What is the purpose of this study?")
  .call(wrap, textWidth);
slide_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 16)
  .text("The purpose of the project is to determine whether an individual’s instrumental support network impacts their workplace wellbeing.")
  .call(wrap, textWidth);
slide_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 3)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 20)
  .text("Why have I been invited?")
 .call(wrap, textWidth);
slide_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 24)
  .text("You have been selected to take part in this research as you are over the age of 18 and are currently employed in either full-time or part-time work. ")
  .call(wrap, textWidth);
slide_1.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 3)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 28)
  .text("Do I have to take apart?")
 .call(wrap, textWidth);
slide_1.append("text")
 .attr("class", "slideText")
 .attr("x", center - textWidth / 2)
 .attr("y", text_offset_top + title_offset_top + lineHeight * 32)
 .text("No. It is up to you whether you would like to take part in the study. I am giving you this information to help you make that decision. If you do decide to take part, remember that you can stop being involved in the study whenever you choose, without telling me why.  You are completely free to decide whether to take part, or to take part and then leave the study before completion.  If you no longer want to take part, simply close your browser.")
 .call(wrap, textWidth);
slide_1.append("text")
 .attr("class", "slideText")
 .attr("x", center - textWidth / 3)
 .attr("y", text_offset_top + title_offset_top + lineHeight * 40)
 .text("What will happen if I take part?")
 .call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 44)
.text("All that is required for this study is the completion of an online questionnaire which will take between 10-15 minutes.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 54)
.text("Will my participation involve any physical discomfort?")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 58)
.text("No.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 68)
.text("Will my participation involve any psychological discomfort or embarrassment?")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 72)
.text("No. ")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 78)
.text(" How will confidentiality be assured and who will have access to the information that I provide")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 82)
.text("All data provided in this project will remain anonymous. Prior to starting the questionnaire you will be asked to provide a code word as substitute for your name. When asking about individuals in your life the questionnaire will ask you to provide initials instead of a full name. ")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 90)
.text("What categories of personal data will be collected and processed in this study?")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 94)
.text("This research will collect basic demographic variables (Gender, age etc.) You will also provide data surrounding your Instagram use, and information about your social network members (first names/initials/nicknames).")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 98)
.text("Will I receive any financial rewards / travel expenses for taking part?")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 102)
.text("No.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 106)
.text("How can I withdraw from the project?")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 110)
.text("If you wish you withdraw from the project you can contact the researcher via the contact details provided below. You can withdraw from the project at any time.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 3)
.attr("y", text_offset_top + title_offset_top + lineHeight * 114)
.text("If I require further information who should I contact and how?")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 118)
.text("If you require any further information you can contact the researcher or research supervisor via the emails provided on the debrief sheet.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 122)
.text("Researcher email: megan.dodd@northumbria.ac.uk.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 124)
.text("Supervisor email: thomas.pollet@northumbria.ac.uk.")
.call(wrap, textWidth);
slide_1.append("text")
.attr("class", "slideText")
.attr("x", center - textWidth / 2)
.attr("y", text_offset_top + title_offset_top + lineHeight * 138)
.text("If you have any concerns or worries concerning this research or if you wish to register a complaint, please direct it to the Department of Psychology Ethics Chair (Undergraduate) at andrew.mcneill@northumbria.ac.uk.")
.call(wrap, textWidth);
slide_1.style("display", "none");

var slide_2 = d3.select("svg").append("g")
  .attr("id", "slide2");
slide_2.append("rect")
  .style("fill", "white")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth )
  .attr("height", bodyHeight);
slide_2.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight)
  .text("If you would like to take part in this study, please read the statement below and click ‘Continue’")
  .call(wrap, textWidth);
slide_2.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 4)
  .text("I understand the nature of the study, and what is required from me. I understand that after I participate I will receive a debrief providing me with information about the study and contact details for the researcher.  I understand I am free to withdraw from the study at any time, without having to give a reason for withdrawing, and without prejudice. I agree to provide information to the investigator and understand that my contribution will remain confidential. I also consent to the retention of this data under the condition that any subsequent use also be restricted to research projects that have gained ethical approval from Northumbria University.")
  .call(wrap, textWidth);
  slide_2.style("display", "none");


// Slide 3

var slide3 = d3.select("svg").append("g")
  .attr("id", "slide3");
slide3.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide3.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Please state up to 25 names of people with whom you have been in contact with at work in the last month.")
  .call(wrap, textWidth);
slide3.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide3 .slideText tspan').length + $('#slide3 .slideText').length-1))
  .text("The names do not have to be accurate; you can also name nicknames. It is important that you recognize the name if you encounter this name in a subsequent question.")
  .call(wrap, textWidth);
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "one_at_a_time")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide3 .slideText tspan').length + $('#slide3 .slideText').length-1))
  .text("You can input up to 25 people.")
  .call(wrap, textWidth);
var textheight = $('#slide3 .slideText tspan').length + $('#slide3 .slideText').length;
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "first_friend_text")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * textheight)
  .text("You can choose to view the contact list of your (mobile) phone, email, or Facebook if this helps.")
  .call(wrap, textWidth)
  .attr("display", "none");
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "second_friend_text")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * textheight)
  .style("stroke", "none")
  .style("fill", "red")
  .text("Is there another person with whom you discuss important matters? Please list below the initials of those who you would go to in the workplace for instrumental support. Instrumental support can be defined as support which includes concrete assistance such as financial assistance or completing a physical task.")
  .call(wrap, textWidth)
  .attr("display", "none");
slide3.append("text")
  .attr("class", "slideText")
  .attr("id", "final_friend_text")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * textheight)
  .style("stroke", "none")
  .style("fill", "red")
  .text("Thank you for entering these names. click on \"Continue\".")
  .call(wrap, textWidth)
  .attr("display", "none");
slide3.style("display", "none");

// Slide 4
// Slide 5

var slide5 = d3.select("svg").append("g")
  .attr("id", "slide5");
slide5.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide5.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("How close is your relationship to each person?")
  .call(wrap, textWidth);
slide5.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide5 .slideText tspan').length + $('#slide5 .slideText').length-1))
  .text("Drag the circles with your mouse to the different answers at the bottom on the screen, the circles will change colour when they are placed in a box.")
  .call(wrap, textWidth);
slide5.style("display", "none");

// Slide 6

var slide6 = d3.select("svg").append("g")
  .attr("id", "slide6");
slide6.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide6.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("To the best of your knowledge, what is the highest level of education that these people have completed?")
  .call(wrap, textWidth);
slide6.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide6 .slideText tspan').length + $('#slide6 .slideText').length-1))
  .text("It's not a problem if you don't know exactly - please provide your best estimate. If you really don't know about some people, you don't have to drag that person to a box. The circles will change color when they end up in a box.")
  .call(wrap, textWidth);
slide6.style("display", "none");

// Slide 7

var slide7 = d3.select("svg").append("g")
  .attr("id", "slide7")
slide7.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide7.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("How often do you have personal contact with these people?")
  .call(wrap, textWidth);
slide7.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide7 .slideText tspan').length + $('#slide7 .slideText').length-1))
  .text("By personal contact we mean contact in real life, so in person. We do NOT mean contact here via, for example, the telephone or social media.")
  .call(wrap, textWidth);
slide7.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide7 .slideText tspan').length + $('#slide7 .slideText').length-1))
  .text("Drag the circles with your mouse to the different answers at the bottom on the screen, the circles will change colour when they are placed in a box.")
  .call(wrap, textWidth);
slide7.style("display", "none");

// Slide 8

var slide8 = d3.select("svg").append("g")
  .attr("id", "slide8")
slide8.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide8.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("How often do you contact these people in other ways than personally, for example via (mobile) telephone, mail, email, chat, sms, and other ways of online and offline communication.")
  .call(wrap, textWidth);
slide8.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide8 .slideText tspan').length + $('#slide8 .slideText').length-1))
  .text("Drag the circles with your mouse to the different answers at the bottom on the screen, the circles will change colour when they are placed in a box.")
  .call(wrap, textWidth);
slide8.style("display", "none");

// Slide 9

var slide9 = d3.select("svg").append("g")
  .attr("id", "slide9")
slide9.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide9.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("In the past, who out of these people have you gone to for instrumental support more than once?")
  .call(wrap, textWidth);
slide9.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide9 .slideText tspan').length + $('#slide9 .slideText').length-1))
  .text("Click on the person's name if they have given you support, the circle will change color. If you have clicked the wrong person by mistake, you can restore this choice by clicking the name of this person again.")
  .call(wrap, textWidth);
slide9.style("display", "none");



var slide14 = d3.select("svg").append("g")
  .attr("id", "slide14")
slide14.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide14.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Now we ask you about the mutual contact of the people you just mentioned. These are quite a few questions, but you will see that you go through them quickly. You are almost at the end of the questionnaire.")
  .call(wrap, textWidth);
slide14.append("text")
  .attr("class", "slideText")
  .attr("id", "contactMet1")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide14 .slideText tspan').length + $('#slide14 .slideText').length-1))
  .text("When it comes too...")
  .call(wrap, textWidth);
slide14.append("text")
  .attr("class", "slideText")
  .attr("id", "contactMet2")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide14 .slideText tspan').length + $('#slide14 .slideText').length-1))
  .text("Who is in contact with, by contact we mean all forms of contact, such as personal contact, contact via (mobile) telephone, mail, email, sms, and other ways of online and offline communication.")
  .call(wrap, textWidth);
slide14.append("text")
  .attr("class", "slideText")
  .attr("id", "contactMet3")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide14 .slideText tspan').length + $('#slide14 .slideText').length-1))
  .text("Select the people who are in contact with each other by clicking on the circle with the mouse. A line will be created that indicates that the people are in contact with each other. Press the circle again to make the line disappear again, if the people are not in contact with each other.")
  .call(wrap, textWidth);
slide14.style("display", "none");

// Slide 15

var slide15 = d3.select("svg").append("g")
  .attr("id", "slide15")
slide15.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide15.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("Which of these people do you consider to be a friend?")
  .call(wrap, textWidth);
slide15.append("text")
  .attr("class", "slideText")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top + lineHeight * ($('#slide15 .slideText tspan').length + $('#slide15 .slideText').length-1))
  .text("Click on the person's name if you consider them to be a friend - the circle will change color. If you have clicked the wrong person by mistake, you can restore this choice by clicking the name of this person again.")
  .call(wrap, textWidth);
slide15.style("display", "none");

//Slide 16

var slide16 = d3.select("svg").append("g")
  .attr("id", "slide16");
slide16.append("rect")
  .style("fill", "white")
  .attr("class", "slide")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", bodyWidth)
  .attr("height", bodyHeight);
slide16.append("text")
  .attr("class", "slideText numfri")
  .attr("x", center - (textWidth / 2))
  .attr("y", text_offset_top)
  .text("PARTICIPANT DEBRIEF")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 3)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 4)
  .text("What was the purpose of the project?")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 8)
  .text("The purpose of the study was to determine how the density of an individual’s instrumental support network at work, and the gender ratio of their support network, impact upon their workplace well-being.")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 3)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 16)
  .text("How will I find out about the results?")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 20)
  .text("If you wish to know the results of the study you can contact the researcher via the email provided below.")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 3)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 24)
  .text("If I change my mind and wish to withdraw the information I have provided, how do I do this?")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 28)
  .text("If you wish to withdraw your information you can contact the researcher via the email provided below. This must be done no later than a week after participation and you must email the researcher with the code word you provided during the study. ")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 34)
  .text("The data collected in this study may also be published in scientific journals or presented at conferences.  Information and data gathered during this research study will only be available to the research team identified in the information sheet. Should the research be presented or published in any form, all data will be anonymous (i.e. your personal information or data will not be identifiable). It will be hosted on the open science framework, Should you not want this, then please contact the researchers and request removal of your data. Note however, that at no point will your personal information or data be revealed. ")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 42)
  .text("All information and data gathered during this research will be stored in line with the Data Protection Act and GDPR. The anonymised data might be stored indefinitely in order to comply with good scientific practice. Should you not want this, then please contact the researchers and request removal of your data. Note however, that at no point will your personal information or data be revealed. ")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 50)
  .text("If you wish to receive feedback about the findings of this research study, then please contact the researcher at connor.malcolm@northumbria.ac.uk.")
  .call(wrap, textWidth);
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 54)
  .text("This study and its protocol have received full ethical approval from the Department of Psychology Ethics Committee (Undergraduate) in accordance with the School of Health and Life Sciences Ethics Committee. If you require confirmation of this please contact the Chair of this Committee (Andrew McNeill), stating the title of the research project and the name of the researcher.")
  .call(wrap, textWidth);
slide16.style("display", "none");
slide16.append("text")
  .attr("class", "slideText")
  .attr("x", center - textWidth / 2)
  .attr("y", text_offset_top + title_offset_top + lineHeight * 64)
  .text("Thank you for participating in this survey. You may now close the browser.")
  .call(wrap, textWidth);
slide16.style("display", "none");
