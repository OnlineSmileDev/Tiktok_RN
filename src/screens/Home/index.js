import React, { useState } from "react";
import { View, ScrollView, Dimensions, Image } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPlus,
  faHeart,
  faCommentDots,
  faPlay,
  faShare,
  faMusic
} from "@fortawesome/free-solid-svg-icons";

import BottomTabNavigator from "../../Components/BottomTabNavigator";

import { feed } from "../../../data/feed";

import {
  styles,
  NewsByFollowing,
  NewsByFollowingText,
  NewsByFollowingTextBold,
  ContentRight,
  ContentRightUser,
  ContentRightUserImage,
  ContentRightUserPlus,
  ContentRightHeart,
  ContentRightComment,
  ContentRightWhatsApp,
  ContentRightWhatsAppImage,
  ContentRightText,
  ContentLeftBottom,
  ContentLeftBottomNameUser,
  ContentLeftBottomNameUserText,
  ContentLeftBottomDescription,
  ContentLeftBottomMusic
} from "./styles";

export default function Home({ navigation }) {
  const [paused, setPaused] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {paused && (
        <FontAwesomeIcon
          style={{
            zIndex: 999,
            opacity: 0.8,
            position: "absolute",
            alignSelf: "center",
            top: "40%",
            bottom: "40%",
            left: "40%",
            right: "40%"
          }}
          icon={faPlay}
          size={100}
          color="#E5E5E5"
        />
      )}
      <NewsByFollowing>
        <NewsByFollowingText>
          Following   <NewsByFollowingTextBold>For You</NewsByFollowingTextBold>{" "}
        </NewsByFollowingText>
      </NewsByFollowing>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
      >
        {feed.map(feedItem => (
          <View
            key={feedItem.id}
            style={{
              flex: 1,
              height: Dimensions.get("window").height,
              backgroundColor: "#010101"
            }}
          >
            <Image
              style={styles.backgroundVideo}
              source={{ uri: feedItem.feedImage }}
            />
            <ContentRight>
              <ContentRightUser>
                <ContentRightUserImage
                  resizeMode="contain"
                  source={{
                    uri:
                      "https://i.pinimg.com/originals/7b/8f/49/7b8f492529fd236dc59baf184faf8488.jpg"
                  }}
                />
              </ContentRightUser>
              <ContentRightUserPlus>
                <FontAwesomeIcon icon={faPlus} size={12} color="#FFF" />
              </ContentRightUserPlus>
              <ContentRightHeart>
                <FontAwesomeIcon icon={faHeart} size={28} color="#FFF" />
                <ContentRightText>
                  {feedItem.likeCount > 1000
                    ? `${feedItem.likeCount}K`
                    : feedItem.likeCount}
                </ContentRightText>
              </ContentRightHeart>
              <ContentRightComment>
                <FontAwesomeIcon icon={faCommentDots} size={28} color="#FFF" />
                <ContentRightText>
                  {feedItem.likeCount > 1000
                    ? `${feedItem.likeCount}K`
                    : feedItem.likeCount}
                </ContentRightText>
              </ContentRightComment>
              <ContentRightWhatsApp>
                <FontAwesomeIcon icon={faShare} size={28} color="#FFF" />
                <ContentRightText>
                  {feedItem.likeCount > 1000
                    ? `${feedItem.likeCount}K`
                    : feedItem.likeCount}
                </ContentRightText>
              </ContentRightWhatsApp>
              <ContentRightWhatsApp>
                <ContentRightWhatsAppImage
                  source={{ uri: "https://picsum.photos/200" }}
                />
              </ContentRightWhatsApp>
            </ContentRight>
            <ContentLeftBottom>
              <ContentLeftBottomNameUser
                onPress={() =>
                  navigation.navigate("User", {
                    user: {
                      image: "",
                      name: feedItem.userName,
                      following: 0,
                      followers: 0,
                      likes: 0
                    }
                  })
                }
              >
                <ContentLeftBottomNameUserText numberOfLines={1}>
                  @{feedItem.userName}
                </ContentLeftBottomNameUserText>
              </ContentLeftBottomNameUser>
              <ContentLeftBottomDescription numberOfLines={3}>
                {feedItem.description}
              </ContentLeftBottomDescription>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesomeIcon
                  icon={faMusic}
                  size={13}
                  color="#FFF"
                  style={{ marginTop: 10, marginRight: 10 }}
                />
                <ContentLeftBottomMusic numberOfLines={1}>
                  {feedItem.music.songTitle}
                </ContentLeftBottomMusic>
              </View>
            </ContentLeftBottom>
          </View>
        ))}
      </ScrollView>
      <BottomTabNavigator
        background="transparent"
        colorIcon="#FFF"
        colorTitle="#FFF"
        navigation={navigation}
      />
    </View>
  );
}
