import React from "react";

const ProfileText = () => {
  return (
    <div className="p-2 text-white w-[600px] h-[580px]  flex items-center justify-center">
      <div>
        <p className="text-4xl font-bold">안녕하세요!</p>
        <p className="text-4xl font-bold mt-2">
          프론트엔드 개발자 김민영입니다.
        </p>
        <p className="mt-3">
          코로나를 계기로 개발을 시작하여 React와 React Native로 다양한
          프로젝트를 진행해왔으며, 기획과 배포 경험도 갖추고 있습니다. flutter로
          만든 첫 상용앱인 Camter앱을 만들며 프론트엔드의 매력을 느껴 프론트엔드
          개발자로 성장하고자 노력 중입니다. 프로젝트에서 상태 관리와 소셜
          로그인 기능을 구현하며 기본기를 쌓았고, 이후 아토믹 디자인 기법을 통해
          코드 구조와 정리의 중요성을 배웠습니다. 현재는 사이드 프로젝트로
          Fridge Chef라는 앱을 React Native로 개발하여 배포하였으며 웹과 앱
          기술을 겸비한 React 개발자로 성장하고 싶습니다.
        </p>
      </div>
    </div>
  );
};

export default ProfileText;
