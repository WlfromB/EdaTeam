import React, { useState } from 'react';

export const RecipeForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        linkVideo: '',
        linkImage: '',
    });

    const [ingredients, setIngredients] = useState([{ name: '', weight: '', price1: '', price2: '', price3: '' }]);
    const [tags, setTags] = useState([{ name: '', href: '' }]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleIngredientChange = (index, e) => {
        const { name, value } = e.target;
        const updatedIngredients = [...ingredients];
        updatedIngredients[index][name] = value;
        setIngredients(updatedIngredients);
    };

    const handleTagChange = (index, e) => {
        const { name, value } = e.target;
        const updatedTags = [...tags];
        updatedTags[index][name] = value;
        setTags(updatedTags);
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { name: '', weight: '', price1: '', price2: '', price3: '' }]);
    };

    const handleRemoveIngredient = (index) => {
        setIngredients(ingredients.filter((_, i) => i !== index));
    };

    const handleAddTag = () => {
        setTags([...tags, { name: '', href: '' }]);
    };

    const handleRemoveTag = (index) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSubmit({ ...formData, ingredients, tags });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Имя блюда:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />

            <label htmlFor="linkVideo">Ссылка на видео:</label>
            <input type="url" id="linkVideo" name="linkVideo" value={formData.linkVideo} onChange={handleInputChange} required />

            <label htmlFor="linkImage">Ссылка на картинку:</label>
            <input type="url" id="linkImage" name="linkImage" value={formData.linkImage} onChange={handleInputChange} required />

            <h3>Ингредиенты:</h3>
            {ingredients.map((ingredient, index) => (
                <div key={index}>
                    <input type="text" name="name" value={ingredient.name} onChange={(e) => handleIngredientChange(index, e)} placeholder="Название ингредиента" required />
                    <input type="text" name="weight" value={ingredient.weight} onChange={(e) => handleIngredientChange(index, e)} placeholder="Вес" required />
                    <input type="text" name="price1" value={ingredient.price1} onChange={(e) => handleIngredientChange(index, e)} placeholder="Цена 1" required />
                    <input type="text" name="price2" value={ingredient.price2} onChange={(e) => handleIngredientChange(index, e)} placeholder="Цена 2" required />
                    <input type="text" name="price3" value={ingredient.price3} onChange={(e) => handleIngredientChange(index, e)} placeholder="Цена 3" required />
                    {index > 0 && <button type="button" onClick={() => handleRemoveIngredient(index)}>Удалить</button>}
                </div>
            ))}
            <button type="button" onClick={handleAddIngredient}>Добавить ингредиент</button>

            <h3>Теги:</h3>
            {tags.map((tag, index) => (
                <div key={index}>
                    <input type="text" name="name" value={tag.name} onChange={(e) => handleTagChange(index, e)} placeholder="Название тега" required />
                    <input type="text" name="href" value={tag.href} onChange={(e) => handleTagChange(index, e)} placeholder="Ссылка на тег" required />
                    {index > 0 && <button type="button" onClick={() => handleRemoveTag(index)}>Удалить</button>}
                </div>
            ))}
            <button type="button" onClick={handleAddTag}>Добавить тег</button>

            <button type="submit">Добавить рецепт</button>
        </form>
    );
};