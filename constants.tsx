
import React from 'react';
import { Step, Advantage, FAQItem } from './types';

export const STEPS: Step[] = [
  {
    id: 1,
    title: "플러스 오퍼 신청",
    description: "담당자가 참여 조건 및 적용 범위를 확인합니다."
  },
  {
    id: 2,
    title: "온라인 계약 동의",
    description: "참여 브랜드 기본 계약서 확인 후 온라인 동의 버튼 클릭",
    tags: ["출력/날인 불필요", "법적 효력 동일"]
  },
  {
    id: 3,
    title: "광고 적용 시작",
    description: "계약 완료 즉시 카테고리 내 우선 노출 영역에 반영됩니다."
  },
  {
    id: 4,
    title: "성과 데이터 확인",
    description: "적용 샘플 수, 배송 수, 실제 고객 수 대시보드에서 실시간 확인 가능"
  }
];

export const ADVANTAGES: Advantage[] = [
  {
    id: 1,
    title: "최대 18% 추가 고객 확보",
    description: "도입만으로 최대 18% 추가 고객을 확보해보세요."
  },
  {
    id: 2,
    title: "경쟁사 대비 점유율 방어",
    description: "광고 미참여 시 경쟁 브랜드가 해당 영역을 차지할 수 있습니다."
  },
  {
    id: 3,
    title: "실 데이터 기반 성과 확인",
    description: "적용 샘플 수 / 배송 수 / 실제 고객 수 모두 대시보드에서 확인 가능"
  },
  {
    id: 4,
    title: "빠른 시작",
    description: "계약 완료 후 즉시 적용, 별도 오프라인 계약 절차 없음"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "계약은 복잡한가요?",
    answer: "아닙니다. 온라인 동의 방식으로 평균 3분 내 완료됩니다."
  },
  {
    id: 2,
    question: "해지는 가능한가요?",
    answer: "네, 계약 조건에 따라 조정 가능합니다."
  },
  {
    id: 3,
    question: "언제부터 적용되나요?",
    answer: "계약 완료 후 바로 적용됩니다."
  }
];
