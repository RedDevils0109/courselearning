import React, { useState } from "react";
import SideNavBar from "../components/SideNavBar";
import Content from "../components/Content";
import styled from "styled-components";

const Profile = () => {
  const [selectedCategory, setSelectedCategory] = useState("home");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <ProfileWrapper>
      <SideNavBar onCategoryClick={handleCategoryClick} />
      <ContentWrapper>
        <Content selectedCategory={selectedCategory} />
      </ContentWrapper>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 0 0 80%;
  padding: 20px;
  background-color: #f9f9f9;
  overflow-y: auto;
`;

export default Profile;
