import React, { useState } from "react";
import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  function showModalHandler() {
    setModalVisible(true);
  }

  function hideModalHandler() {
    setModalVisible(false);
  }

  return (
    <React.Fragment>
      <MainHeader creatingPost={showModalHandler} />
      <main className="flex flex-col items-center justify-start h-screen gap-10">
        <PostList isPosting={modalVisible} onStopPosting={hideModalHandler} />
      </main>
    </React.Fragment>
  );
};

export default App;
