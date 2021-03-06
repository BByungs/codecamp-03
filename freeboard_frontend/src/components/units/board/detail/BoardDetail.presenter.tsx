import {
  Avatar,
  AvatarWrapper,
  Body,
  Button,
  Contents,
  CreatedAt,
  BottomWrapper,
  Header,
  Info,
  Title,
  Wrapper,
  Writer,
  CardWrapper,
  Youtube,
  LikeWrapper,
  IconWrapper,
  LikeIcon,
  LikeCount,
  DislikeIcon,
  DislikeCount,
  LinkIcon,
  LocationIcon,
  UploadImg,
} from "./BoardDetail.styles";
import { Tooltip } from "antd";
import { withAuth } from "../../../commons/hoc/withAuth";
const BoardDetailUI = (props: any) => {
  return (
    <Wrapper>
      <CardWrapper>
        <Header>
          <AvatarWrapper>
            <Avatar src="/images/avatar.png" />
            <Info>
              <Writer>{props.data?.fetchBoard.writer}</Writer>
              <CreatedAt>
                {props.data?.fetchBoard.createdAt.slice(0, 10)}
              </CreatedAt>
            </Info>
          </AvatarWrapper>
          <IconWrapper>
            <LinkIcon src="/images/board/detail/link.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <LocationIcon src="/images/board/detail/location.png" />
            </Tooltip>
          </IconWrapper>
        </Header>
        <Body>
          <Title>{props.data?.fetchBoard.title}</Title>
          <Contents>{props.data?.fetchBoard.contents}</Contents>
          <Youtube
            url={props.data?.fetchBoard.youtubeUrl}
            width="486px"
            height="240px"
          />
          <div>
            {/* {props.data?.fetchBoard.images.map((el: any, idx: any) => (
              <UploadImg
                key={el}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))} */}
            {props.data?.fetchBoard.images
              ?.filter((el: any) => el)
              .map((el: any) => (
                <UploadImg
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </div>
          <LikeWrapper>
            <IconWrapper>
              <LikeIcon onClick={props.onClickLike} />
              <LikeCount>{props.data?.fetchBoard.likeCount}</LikeCount>
            </IconWrapper>
            <IconWrapper>
              <DislikeIcon onClick={props.onClickDislike} />
              <DislikeCount>{props.data?.fetchBoard.dislikeCount}</DislikeCount>
            </IconWrapper>
          </LikeWrapper>
        </Body>
      </CardWrapper>
      <BottomWrapper>
        <Button onClick={props.onClickMoveToList}>????????????</Button>
        <Button onClick={props.onClickMoveToEdit}>????????????</Button>
        <Button onClick={props.onClickDelete}>????????????</Button>
      </BottomWrapper>
    </Wrapper>
  );
};

export default withAuth(BoardDetailUI);
