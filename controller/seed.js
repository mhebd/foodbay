const { PrismaClient } = require('@prisma/client');
const asyncHdl = require('../utility/asyncHdl');
const prisma = new PrismaClient();

exports.seed = asyncHdl(async (req, res, next) => {
	(async () => {
		try {
			for (const user of data.users) {
				await prisma.user.create({
					data: user,
				});
			}

			for (const address of data.addresses) {
				await prisma.address.create({
					data: address,
				});
			}

			for (const category of data.categories) {
				await prisma.category.create({
					data: category,
				});
			}

			for (const product of data.products) {
				await prisma.product.create({
					data: product,
				});
			}

			for (const review of data.reviews) {
				await prisma.review.create({
					data: review,
				});
			}

			for (const featuredCard of data.featuredCards) {
				await prisma.featuredCard.create({
					data: featuredCard,
				});
			}

			for (const slider of data.sliders) {
				await prisma.slider.create({
					data: slider,
				});
			}

			console.log('Seed data inserted successfully.');
			res.send('Seed data inserted successfully.');
		} catch (error) {
			console.error('Error inserting seed data:', error);
			res.status(500).send('Error inserting seed data.');
		}
	})();
});

const data = {
	products: [
		{
			id: 1,
			name: 'Salmon Fillet',
			price: 10,
			image: 'seed/products/1.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 1,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 2,
			name: 'Shrimp Cocktail',
			price: 12,
			image: 'seed/products/2.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 2,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 3,
			name: 'Tuna Sushi',
			price: 8,
			image: 'seed/products/3.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 3,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 4,
			name: 'Lobster Bisque',
			price: 15,
			image: 'seed/products/4.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 4,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 5,
			name: 'Crab Legs',
			price: 18,
			image: 'seed/products/5.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 1,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 6,
			name: 'Clam Chowder',
			price: 10,
			image: 'seed/products/6.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 2,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 7,
			name: 'Fish and Chips',
			price: 12,
			image: 'seed/products/7.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 3,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 8,
			name: 'Ceviche',
			price: 8,
			image: 'seed/products/8.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 4,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 9,
			name: 'Oyster Rockefeller',
			price: 15,
			image: 'seed/products/9.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 1,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 10,
			name: 'Sashimi Platter',
			price: 20,
			image: 'seed/products/10.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 2,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 11,
			name: 'Seafood Paella',
			price: 18,
			image: 'seed/products/11.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 3,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 12,
			name: 'Cajun Shrimp',
			price: 14,
			image: 'seed/products/12.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 4,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 13,
			name: 'Grilled Octopus',
			price: 16,
			image: 'seed/products/13.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 1,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 14,
			name: 'Stuffed Calamari',
			price: 12,
			image: 'seed/products/14.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 2,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 15,
			name: 'Salmon Salad',
			price: 10,
			image: 'seed/products/15.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 3,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 16,
			name: 'Shrimp Scampi',
			price: 16,
			image: 'seed/products/16.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 4,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 17,
			name: 'Fish Tacos',
			price: 12,
			image: 'seed/products/17.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 1,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 18,
			name: 'Lobster Roll',
			price: 20,
			image: 'seed/products/18.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 2,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 19,
			name: 'Shrimp Fried Rice',
			price: 14,
			image: 'seed/products/19.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 3,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 20,
			name: 'Crispy Calamari',
			price: 12,
			image: 'seed/products/20.jpg',
			featured: false,
			special: false,
			discount: 0,
			categoryId: 4,
			created: '2023-06-16T00:00:00Z',
		},
	],
	users: [
		{
			id: 1,
			name: 'John Doe',
			email: 'john.doe@example.com',
			password: 'dddddd',
			gravatar: 'https://unsplash.com/photos/abcdefg',
			role: 'USER',
			verified: true,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 2,
			name: 'Jane Smith',
			email: 'jane.smith@example.com',
			password: 'dddddd',
			gravatar: 'https://unsplash.com/photos/hijklmn',
			role: 'USER',
			verified: true,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 3,
			name: 'David Johnson',
			email: 'david.johnson@example.com',
			password: 'dddddd',
			gravatar: 'https://unsplash.com/photos/opqrstu',
			role: 'USER',
			verified: true,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 4,
			name: 'Sarah Brown',
			email: 'sarah.brown@example.com',
			password: 'dddddd',
			gravatar: 'https://unsplash.com/photos/vwxyzab',
			role: 'USER',
			verified: true,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 5,
			name: 'Michael Davis',
			email: 'michael.davis@example.com',
			password: 'dddddd',
			gravatar: 'https://unsplash.com/photos/cdefghi',
			role: 'USER',
			verified: true,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 6,
			name: 'Emily Wilson',
			email: 'emily.wilson@example.com',
			password: 'dddddd',
			gravatar: 'https://unsplash.com/photos/jklmnop',
			role: 'USER',
			verified: true,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 7,
			name: 'Daniel Taylor',
			email: 'daniel.taylor@example.com',
			password: 'dddddd',
			gravatar: 'https://unsplash.com/photos/qrstuvw',
			role: 'USER',
			verified: true,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 8,
			name: 'Olivia Martinez',
			email: 'olivia.martinez@example.com',
			password: 'dddddd',
			gravatar: 'https://unsplash.com/photos/xyzabcd',
			role: 'USER',
			verified: true,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 9,
			name: 'James Anderson',
			email: 'james.anderson@example.com',
			password: 'dddddd',
			gravatar: 'https://unsplash.com/photos/efghijk',
			role: 'USER',
			verified: true,
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 10,
			name: 'Sophia Wilson',
			email: 'sophia.wilson@example.com',
			password: 'dddddd',
			gravatar: 'https://unsplash.com/photos/lmnopqr',
			role: 'USER',
			verified: true,
			created: '2023-06-16T00:00:00Z',
		},
	],
	addresses: [
		{
			id: 1,
			country: 'USA',
			city: 'New York',
			zip: 12345,
			address: '123 Street',
			userId: 1,
		},
		{
			id: 2,
			country: 'USA',
			city: 'Los Angeles',
			zip: 54321,
			address: '456 Street',
			userId: 2,
		},
		{
			id: 3,
			country: 'UK',
			city: 'London',
			zip: 67890,
			address: '789 Street',
			userId: 3,
		},
		{
			id: 4,
			country: 'Canada',
			city: 'Toronto',
			zip: 98765,
			address: '987 Street',
			userId: 4,
		},
		{
			id: 5,
			country: 'Australia',
			city: 'Sydney',
			zip: 54321,
			address: '654 Street',
			userId: 5,
		},
		{
			id: 6,
			country: 'Germany',
			city: 'Berlin',
			zip: 13579,
			address: '246 Street',
			userId: 6,
		},
		{
			id: 7,
			country: 'France',
			city: 'Paris',
			zip: 24680,
			address: '135 Street',
			userId: 7,
		},
		{
			id: 8,
			country: 'Spain',
			city: 'Madrid',
			zip: 80234,
			address: '345 Street',
			userId: 8,
		},
		{
			id: 9,
			country: 'Italy',
			city: 'Rome',
			zip: 53124,
			address: '987 Street',
			userId: 9,
		},
		{
			id: 10,
			country: 'Japan',
			city: 'Tokyo',
			zip: 12345,
			address: '654 Street',
			userId: 10,
		},
	],
	reviews: [
		{
			id: 1,
			name: 'Lisa Johnson',
			image: 'seed/team/1.jpg',
			opinion:
				'The seafood was incredibly fresh and delicious. Highly recommended!',
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 2,
			name: 'Mark Wilson',
			image: 'seed/team/2.jpg',
			opinion:
				'The variety of seafood options was impressive. Great quality and taste.',
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 3,
			name: 'Laura Thompson',
			image: 'seed/team/3.jpg',
			opinion:
				'I ordered the shrimp cocktail, and it was the best I have ever had. Fantastic!',
			created: '2023-06-16T00:00:00Z',
		},
	],
	featuredCards: [
		{
			id: 1,
			title: 'Special Offer',
			caption: 'Get 20% off on selected seafood items',
			icon: 'star',
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 2,
			title: 'Fresh Arrivals',
			caption: 'Discover our latest seafood products',
			icon: 'leaf',
			created: '2023-06-16T00:00:00Z',
		},
		{
			id: 3,
			title: 'Customer Favorites',
			caption: 'Explore the most loved seafood items',
			icon: 'heart',
			created: '2023-06-16T00:00:00Z',
		},
	],
	categories: [
		{
			id: 1,
			name: 'Seafood',
		},
		{
			id: 2,
			name: 'Vegetarian',
		},
		{
			id: 3,
			name: 'Poultry',
		},
		{
			id: 4,
			name: 'Desserts',
		},
	],
	sliders: [
		{
			id: 1,
			image: 'seed/slider-1.jpg',
			caption: 'Discover the beauty of nature',
			created: '2023-06-20T00:00:00Z',
		},
		{
			id: 2,
			image: 'seed/slider-2.jpg',
			caption: 'Explore breathtaking landscapes',
			created: '2023-06-20T00:00:00Z',
		},
		{
			id: 3,
			image: 'seed/slider-3.jpg',
			caption: 'Unleash your creativity',
			created: '2023-06-20T00:00:00Z',
		},
		{
			id: 4,
			image: 'seed/slider-4.jpg',
			caption: 'Experience the magic of photography',
			created: '2023-06-20T00:00:00Z',
		},
	],
};
