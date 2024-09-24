import React from "react";

interface Props {
  params: {
    photoId: number;
    userId: number;
  };
}

const photoDetailPage = ({ params: { photoId, userId } }: Props) => {
  return (
    <div>
      the user {userId} has the photo {photoId}
    </div>
  );
};

export default photoDetailPage;
