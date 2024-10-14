function TopNav() {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <h1 className="text-3xl font-bold text-white bg-primary p-3">
      <span onClick={handleReload} className="cursor-pointer">
        EZ Recipe
      </span>
    </h1>
  );
}
export default TopNav;
