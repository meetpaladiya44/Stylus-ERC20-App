export const IStylusToken = [
  // ERC20 Standard Interface
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address account) view returns (uint256)",
  "function transfer(address recipient, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function transferFrom(address sender, address recipient, uint256 amount) returns (bool)",

  // StylusToken Specific Functions (from lib.rs)
  "function mint(uint256 value) returns ()",
  "function mintTo(address to, uint256 value) returns ()",
  "function burn(uint256 value) returns ()",

  // Events
  "event Transfer(address indexed from, address indexed to, uint256 value)",
  "event Approval(address indexed owner, address indexed spender, uint256 value)",

  // Errors
  "error InsufficientBalance(address from, uint256 have, uint256 want)",
  "error InsufficientAllowance(address owner, address spender, uint256 have, uint256 want)",
];
