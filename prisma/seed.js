const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
	try {
		// Seed users
		const users = await prisma.user.createMany({
			data: [
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
			skipDuplicates: true, // Skip inserting duplicates
		});

		console.log(`Seeded ${users.count} users.`);

		// // Seed products
		// const products = await prisma.product.createMany({
		// 	data: [
		// 		{
		// 			name: 'Product 1',
		// 			price: 100,
		// 			image: 'product1-image-url',
		// 			featured: false,
		// 			special: false,
		// 			discount: 0,
		// 			categoryId: 1, // Assuming category ID 1 exists
		// 		},
		// 		// Add more product objects here...
		// 	],
		// 	skipDuplicates: true, // Skip inserting duplicates
		// });

		// console.log(`Seeded ${products.count} products.`);

		// Add more seeding logic for other models...

		console.log('Seed data inserted successfully.');
	} catch (error) {
		console.error('Error inserting seed data:', error);
	} finally {
		await prisma.$disconnect();
	}
}

seed();
