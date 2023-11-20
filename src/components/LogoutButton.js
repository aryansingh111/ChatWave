// LogoutButton

const LogoutButton = () => {
  const buttonStyle = {
    backgroundColor: 'white',
    color: '#3b2a50',
    padding: '3px 3px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600'
  };

  const handleLogout = () => {
    localStorage.clear();
    // You may also want to redirect the user to the login page or perform other logout-related actions

    //reload page
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <button style={buttonStyle} onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
