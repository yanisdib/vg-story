import { useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import { Article, Topic } from '../../interfaces';

import {
    useImageUploader,
    useTextInput,
    useTopics
} from '../../hooks';

import { createPermalink } from '../../helpers/utils/permalink';

import {
    ContentTextArea,
    FeaturedArticleCheckbox,
    Form,
    FormController,
    FormLabel,
    SubmitButton,
    TextInput
} from './ArticleForm.styles';

import { Tag, ImageUploader } from '../';
import withStatusHandler from '../../helpers/hoc/withStatusHandler';


interface ArticleFormProps {
    article?: Article;
    onSubmit: (article: Article) => void;
}


function ArticleForm({ article, onSubmit }: ArticleFormProps)
    : JSX.Element {
    const { error, status, topics } = useTopics();

    const [body, setBody] = useState<string>(article?.body ?? '');
    const [frontImage, setFrontImage] = useImageUploader(
        article?.frontImage ?? { src: '' }
    );
    const [isFeatured, setIsFeatured] = useState<boolean>(article?.isFeatured ?? false);
    const [selectedTopics, setSelectedTopics] = useState<Topic[]>(article?.topics ?? []);
    const [title, setTitle] = useTextInput(article?.title ?? '');

    /**
     * Add or remove topic from state depending on
     * a topic being already selected or not
     * @param event 
     */
    const handleTagClick = (
        event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ): void => {

        //TODO: Refactor this function
        let selectedTopicsCopy = [...selectedTopics];
        const currentInnerText = event.currentTarget.innerText;

        const selectedTopicObject = topics.find(topic => topic.name === currentInnerText)!;
        const isSelectedTopic = selectedTopics.includes(selectedTopicObject);

        isSelectedTopic ? (
            setSelectedTopics(
                selectedTopicsCopy
                    .filter(selectedTopic => selectedTopic.name !== currentInnerText)
            )
        ) : (
            setSelectedTopics([...selectedTopicsCopy, selectedTopicObject])
        )
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)
        : void => {

        event.preventDefault();

        onSubmit({
            author: 'Yanis Dib',
            body,
            frontImage,
            createdAt: moment.now(),
            id: uuidv4(),
            isFeatured,
            permalink: createPermalink(title),
            title,
            topics: selectedTopics,
        });
    }

    const TagsFormControllerWithStatusHandler = withStatusHandler(FormController);


    return (

        <Form role="form" onSubmit={handleSubmit}>
            <FormController>
                <ImageUploader
                    image={frontImage}
                    onChange={setFrontImage}
                />
            </FormController>
            <FormController>
                <FormLabel>Title</FormLabel>
                <TextInput
                    type="text"
                    value={title}
                    onChange={setTitle}
                    placeholder="Name your story"
                    required
                />
            </FormController>
            <TagsFormControllerWithStatusHandler
                error={error}
                status={status}
            >
                <FormLabel>Pick the topics related to your article</FormLabel>
                {topics
                    .map(topic => {
                        const selected = selectedTopics.includes(topic);

                        return (
                            <Tag
                                key={uuidv4()}
                                onClick={handleTagClick}
                                selected={selected}
                            >
                                {topic.name}
                            </Tag>
                        );
                    })}
            </TagsFormControllerWithStatusHandler>
            <FormController>
                <ContentTextArea
                    value={body}
                    onChange={(event) => setBody(event.currentTarget.value)}
                    placeholder='Tell us a story...'
                    required
                />
            </FormController>
            <FormController>
                <FeaturedArticleCheckbox
                    type="checkbox"
                    checked={isFeatured}
                    onChange={() => setIsFeatured(prevIsFeatured => !prevIsFeatured)}
                />
                <label>Featured article</label>
            </FormController>
            <FormController>
                <SubmitButton type="submit" value="Publish this story" />
            </FormController>
        </Form>
    );
}


export default ArticleForm;