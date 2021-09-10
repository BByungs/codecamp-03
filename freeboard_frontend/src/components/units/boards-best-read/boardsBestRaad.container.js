import { FETCH_BOARDS } from "./boardsBestRead.queries";
import BoardBestUI from "./boardsBestRead.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardBestReadPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  function onClickSubmit() {
    router.push("/boards/new");
  }

  function onClickPost(event) {
    router.push(`/boards/detailPage-nonMembers-basic-read/${event.target.id}`);
  }

  return (
    <BoardBestUI
      data={data}
      onClickSubmit={onClickSubmit}
      onClickPost={onClickPost}
    />
  );
}
