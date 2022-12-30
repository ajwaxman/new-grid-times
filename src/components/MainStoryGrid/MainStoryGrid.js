import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas: 
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories'
    ;
    grid-template-columns: 2fr 1fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.tabletAndUp} {
    border-left: 1px solid ${COLORS.gray[300]};
    margin-left: -24px;
    padding-left: 24px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${COLORS.gray[300]};
    &:last-of-type {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
`;

const OpinionList = styled(StoryList)`
  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    gap: 32px;
    min-width: 100%;
    a {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
      width: 100%;
    }
  }
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    a {
      margin-bottom: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid ${COLORS.gray[300]};
      &:last-of-type {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
      }
    }
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
