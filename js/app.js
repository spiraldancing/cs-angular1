(function(){
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.products = csGems;
	});

	var myGems = 
	[
		{ 
			name: 'Azurite', 
			price: 4.50, 
			description: 'Description for Azurite.',
			images: [
				{
					full: 'azurite-01-full.jpg',
					thumb: 'azurite-01-thumb.jpg'
				},
				{
					full: 'azurite-02-full.jpg',
					thumb: 'azurite-02-thumb.jpg'
				}
			],
			canPurchase: true,
			isSoldOut: false
		},
		{ 
			name: 'Dodecahedron', 
			price: 2.95, 
			description: 'Description for Dodecahedron.',
			images: [
				{
					full: 'dodecahedron-01-full.jpg',
					thumb: 'dodecahedron-01-thumb.jpg'
				},
				{
					full: 'dodecahedron-02-full.jpg',
					thumb: 'dodecahedron-02-thumb.jpg'
				}
			],
			canPurchase: true,
			isSoldOut: false
		},
		{ 
			name: 'Pentagonal Gem', 
			price: 5.95, 
			description: 'Description for Pentagonal Gem.',
			images: [
				{
					full: 'pentagonal-01-full.jpg',
					thumb: 'pentagonal-01-thumb.jpg'
				},
				{
					full: 'pentagonal-02-full.jpg',
					thumb: 'pentagonal-02-thumb.jpg'
				}
			],
			canPurchase: false,
			isSoldOut: false
		}		
	];

	var csGems = 
	[
		{
			name: 'Azurite',
			description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
			shine: 8,
			price: 110.50,
			rarity: 7,
			color: '#CCC',
			faces: 14,
			canPurchase: true,
			images: 
			[
				"cs-angular-images/gem-02.gif",
				"cs-angular-images/gem-05.gif",
				"cs-angular-images/gem-09.gif"
			],
			reviews: 
			[
				{
					stars: 5,
					body: "I love this gem!",
					author: "joe@example.org",
					createdOn: 1397490980837
				},
				{
					stars: 1,
					body: "This gem sucks.",
					author: "tim@example.org",
					createdOn: 1397490980837
				}
			]
		}, 
		{
			name: 'Bloodstone',
			description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
			shine: 9,
			price: 22.90,
			rarity: 6,
			color: '#EEE',
			faces: 12,
			canPurchase: true,
			images: 
			[
				"cs-angular-images/gem-01.gif",
				"cs-angular-images/gem-03.gif",
				"cs-angular-images/gem-04.gif"
			],
			reviews: 
			[
				{
					stars: 3,
					body: "I think this gem was just OK, could honestly use more shine, IMO.",
					author: "JimmyDean@example.org",
					createdOn: 1397490980837
				}, 
				{
					stars: 4,
					body: "Any gem with 12 faces is for me!",
					author: "gemsRock@example.org",
					createdOn: 1397490980837
				}
			]
		}, 
		{
			name: 'Zircon',
			description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
			shine: 70,
			price: 1100,
			rarity: 2,
			color: '#000',
			faces: 6,
			canPurchase: true,
			images: 
			[
				"cs-angular-images/gem-06.gif",
				"cs-angular-images/gem-07.gif",
				"cs-angular-images/gem-10.gif"
			],
			reviews: 
			[
				{
					stars: 1,
					body: "This gem is WAY too expensive for its rarity value.",
					author: "turtleguyy@example.org",
					createdOn: 1397490980837
				},
				{
					stars: 1,
					body: "BBW: High Shine != High Quality.",
					author: "LouisW407@example.org",
					createdOn: 1397490980837
				},
				{
					stars: 1,
					body: "Don't waste your rubles!",
					author: "nat@example.org",
					createdOn: 1397490980837
				}
			]
		}
	];

})();
