import Axios from './Axios';

export const fetchCategories = async () => {
	try {
		const { data } = await Axios.get(`/category`);
		return data.data.categories;
	} catch (error) {
		console.log(error);
	}
};

export const fetchSliders = async () => {
	try {
		const { data } = await Axios.get(`/slider`);
		return data.data.slides;
	} catch (error) {
		console.log(error);
	}
};

export const fetchFeaturedCards = async () => {
	try {
		const { data } = await Axios.get(`/featured-card`);
		return data.data.featuredCards;
	} catch (error) {
		console.log(error);
	}
};

export const fetchFeaturedProducts = async () => {
	try {
		const { data } = await Axios.get(`/product/featured`);
		return data.data.products;
	} catch (error) {
		console.log(error);
	}
};

export const fetchLatestProducts = async () => {
	try {
		const { data } = await Axios.get(`/product/special`);
		return data.data.products;
	} catch (error) {
		console.log(error);
	}
};

export const fetchProducts = async () => {
	try {
		const { data } = await Axios.get(`/product`);
		return data.data.products;
	} catch (error) {
		console.log(error);
	}
};

export const fetchReview = async () => {
	try {
		const { data } = await Axios.get(`/review`);
		return data.data.reviews;
	} catch (error) {
		console.log(error);
	}
};

export const fetchCategory = async (id) => {
	try {
		const { data } = await Axios.get(`/category/${id}`);
		return data.data.category;
	} catch (error) {
		console.log(error);
	}
};
