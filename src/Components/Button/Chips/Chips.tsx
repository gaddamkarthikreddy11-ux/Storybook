import './Chips.css';

export type ChipProps = {
  label: string;
  variant: 'default' | 'primary' | 'success' | 'danger' | 'outline' | 'gradient';
  selected: boolean;
  onClick: () => void;
  onDelete: () => void;
  icon?: string;
//   avatar?: string;
};

export const Chip = ({
  label,
  variant = 'default',
  selected = false,
  onClick,
  onDelete,
  icon,
//   avatar,
}: ChipProps) => {
  return (
    <div
      className={`chip ${variant} ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {/* {avatar && <img src={avatar} alt="avatar" />} */}
      {icon && <span className="chip-icon">{icon}</span>}

      <span>{label}</span>

      {onDelete && (
        <span
          className="chip-close"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          
        </span>
      )}
    </div>
  );
};