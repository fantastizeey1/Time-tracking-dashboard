# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Blue: hsl(246, 80%, 60%)

- Light red (work): hsl(15, 100%, 70%)
- Soft blue (play): hsl(195, 74%, 62%)
- Light red (study): hsl(348, 100%, 68%)
- Lime green (exercise): hsl(145, 58%, 55%)
- Violet (social): hsl(264, 64%, 52%)
- Soft orange (self care): hsl(43, 84%, 65%)

### Neutral

- Very dark blue: hsl(226, 43%, 10%)
- Dark blue: hsl(235, 46%, 20%)
- Desaturated blue: hsl(235, 45%, 61%)
- Pale Blue: hsl(236, 100%, 87%)

## Typography

### Body Copy

- Font size: 18px (card titles e.g. Work, Play)

### Font

- Family: [Rubik](https://fonts.google.com/specimen/Rubik)
- Weights: 300, 400, 500

main{
min-width: 90%;
max-width: 90%;
display: flex;
flex-direction: column;
margin: 10% auto;
justify-self: center;
align-items: center;
color: white;
}
h3{
font-size: 18px;
font-weight: 400;

}
.maincard{
background-color: hsl(235, 46%, 20%);
width: 100%;
border-radius: 1em;
margin-bottom: 4%;
}
.up{
background-color: hsl(246, 80%, 60%);
color: rgb(219, 217, 217);
width: 100%;
padding: 20px;
border-radius: 1em;
height: 100px;
font-family: 'Rubik', sans-serif;

}
.up img{
width: 50px;
float: left;
border: 2px solid white;
border-radius: 50%;
margin-right: 20px;
}
.up h2{
font-size: 18px;
font-weight: 500;
padding: 5px;
}
.up p{
font-size: 12px;
font-weight: 300;
margin-top: 7px;
}
.down{
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 20px;
}
.down button{
background-color: transparent;
border: none;
color: hsl(246, 80%, 60%);
padding: 0 20px;
}
.down .active{
color: aliceblue;
}
.work-card{
width: 100%;
background-color: hsl(15, 100%, 70%);
background-position: 100%;
background-position-y: -15%;
background-position-x: 95%;
background-repeat: no-repeat;
background-image: url("icon-work.svg");
border-radius: 1.5em;
margin-bottom: 4%;
}

.work{
margin-top: 8%;
background-color: hsl(235, 46%, 20%);
border-radius: 1em;
display: flex;
flex-direction: row;
padding: 20px 30px;
}
.left{
width: 50%;
width: 50%;
display: flex;
flex-direction: column;
}
.right{
width: 50%;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
gap: 1.5em;
}
.h2{
font-size: 20px;
font-weight: 500;
}

img{
width: 30px;
}
p{
font-size: 12px;
font-weight: 300;
}
.Play-card{
width: 100%;
background-color: hsl(195, 74%, 62%);
background-position: 100%;
background-position-y: -15%;
background-position-x: 95%;
background-repeat: no-repeat;
background-image: url("icon-play.svg");
border-radius: 1.5em;
margin-bottom: 4%;
}
.Play{
margin-top: 9%;
background-color: hsl(235, 46%, 20%);
border-radius: 1em;
display: flex;
flex-direction: row;
padding: 20px 30px;
}
.Study-card{
width: 100%;
background-color: hsl(348, 100%, 68%);
background-position: 100%;
background-position-y: -15%;
background-position-x: 95%;
background-repeat: no-repeat;
background-image: url("icon-study.svg");
border-radius: 1.5em;
margin-bottom: 4%;
}
.Study{
margin-top: 9%;
background-color: hsl(235, 46%, 20%);
border-radius: 1em;
display: flex;
flex-direction: row;
padding: 20px 30px;
}
.Exercise-card{
width: 100%;
background-color: hsl(145, 58%, 55%);
background-position: 100%;
background-position-y: -15%;
background-position-x: 95%;
background-repeat: no-repeat;
background-image: url("icon-exercise.svg");
border-radius: 1.5em;
margin-bottom: 4%;
}
.Exercise{
margin-top: 9%;
background-color: hsl(235, 46%, 20%);
border-radius: 1em;
display: flex;
flex-direction: row;
padding: 20px 30px;
}
.Social-card{
width: 100%;
background-color: hsl(264, 64%, 52%);
background-position: 100%;
background-position-y: -15%;
background-position-x: 95%;
background-repeat: no-repeat;
background-image: url("icon-social.svg");
border-radius: 1.5em;
margin-bottom: 4%;
}
.Social{
margin-top: 9%;
background-color: hsl(235, 46%, 20%);
border-radius: 1em;
display: flex;
flex-direction: row;
padding: 20px 30px;
}
.Self-card{
width: 100%;
background-color: hsl(43, 84%, 65%);
background-position: 100%;
background-position-y: -15%;
background-position-x: 95%;
background-repeat: no-repeat;
background-image: url("icon-self-care.svg");
border-radius: 1.5em;
margin-bottom: 4%;
}
.Self{
margin-top: 9%;
background-color: hsl(235, 46%, 20%);
border-radius: 1em;
display: flex;
flex-direction: row;
padding: 20px 30px;
}
