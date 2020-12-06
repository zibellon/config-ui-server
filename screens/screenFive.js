const body = {
	type: 'column',

	dimens: {
		//Ширина, Высота, отступы
		width: '100 %',
		height: '100 %',
	},

	alignment: {
		justifyContent: 'space_between',
		alignContent: 'center',
		alignItems: 'center',
	},

	backgroundColor: '#FFFFFF',

	children: [
		{
			type: 'simple-recycler',
			grid: {
        orientation: 'vertical',
        numColumns: 2
      },
			dimens: {
				width: '100 %',
			},
			renderItem: {
        type: 'round-img-card',
        elevation: '6 dp',
        corners: '20 dp',
        
        dimens: {
          margin: {
            all: '8 dp'
          }
        },

        image: {
            type: 'image',
            dimens: {
                width: '100 %',
                height: '100 dp',
            },
            url: 'https://strana.ua/img/article/2625/70_main.jpeg'
        },

        content: {
            type: 'column',
    
            children: [
                {
                    type: 'text',
    
                    value: '?????? ??????',
                    color: '#000000',
                    size: '16 sp'
                },
                {
                    type: 'text',
    
                    value: '?????? ?????',
                    color: '#000000',
                    size: '15 sp'
                },
            ]
        }
    },
			itemsCount: 20,
		},
	],
};

const appBar = {
	leading: {
		type: 'back-arrow',
	},
	title: {
		text: 'Screen Five',
		alignment: 'center',
		color: '#000000',
	},
};

const screenUI = {
	name: 'ScreenFive',

	appBar,

	body,
};

module.exports = screenUI;
