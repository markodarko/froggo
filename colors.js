const COLORS = {
white1 	:'white'  ,
whiteG 	:'#e3f1bf',
whiteR 	:'#f9d7bd',
black1 	:'#2c2c36',
black2 	:'#161441',
green0  :'#9ed329',
green1 	:'#b1ff0e',
green2 	:'#03c32c',
yellow1	:'#ffff2d',
blue1  	:'#326379',//'#8cacab',//'#8ac2bf',
blue2  	:'#1c4a5f',//'#708487',//'#557c83',
blue3	:'#163d4e',//'#286764',
goal1	:'#1ce8e1',
goal2	:'#007fa6',
tongue	:'#fe8600',
red1	:'#d74b62',
red2	:'#d60057',
orange1	:'#ff952e',
orange2	:'#f46634',
orange3	:'#b70023',
//grey1  	:'#707070',
//grey2  	:'#565656',
grey1	:'#a6a6a6',
grey2	:'#7b7b7b',
grey3	:'#555555',
grey4	:'#3d3d3d',
grey5	:'#323232',
girl1	:'#fd005d', //body
girl2	:'#ff8460'//spots


}

const COLOR_SETS = {
frog:	[COLORS.whiteG,COLORS.green2,COLORS.green1,COLORS.yellow1,COLORS.black2],
frogG:	[COLORS.whiteG,COLORS.girl1,COLORS.girl2,COLORS.yellow1,COLORS.black2],
stars:	['white',COLORS.yellow1,COLORS.orange1,COLORS.green0,COLORS.whiteG],
cloud:	[COLORS.white1,COLORS.whiteG],
wall:	[COLORS.blue2,COLORS.blue1,COLORS.blue3,COLORS.blue3],
tile:	[COLORS.grey1,COLORS.grey2,COLORS.grey3],
lava:	[COLORS.orange2,COLORS.red1,COLORS.whiteR],
goal:	[COLORS.goal1,COLORS.goal2]
}

//bgColor #1b193a