import Contact from "../model/contact"; // Ensure the model name is correctly capitalized

export const contactdetails = async (request, response) => {
    try {
        const post = new Contact(request.body); // No need to await here as we are just creating an instance
        await post.save(); // Await the save operation

        response.status(200).json('Post saved successfully');
    } catch (error) {
        console.error('Error saving contact:', error); // Log the error for debugging
        response.status(500).json({ error: 'Internal Server Error' });
    }
}
