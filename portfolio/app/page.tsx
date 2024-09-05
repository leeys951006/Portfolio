import './globals.css';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">환영합니다! 여행 계획 사이트</h1>
        <p className="text-lg text-gray-600 mb-4">여행 계획을 쉽고 효율적으로 관리하세요. 나만의 여행 일정을 만들어보세요!</p>
        <a href="/about" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">
          더 알아보기
        </a>
      </section>
    </div>
  );
}
