// components/Layout.js
export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      {children}
    </div>
  );
}
