const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} CareerBridge by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Usaid
        </a>
        . All Right Reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
