interface assetIconProps {
  iconId: string;
  iconSize?: number;
  name: string;
}

function AssetIcon({ iconId, iconSize = 16, name }: assetIconProps) {
  const baseURL =
    "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id";
  const url = `${baseURL}/png_${iconSize}/${iconId.split("-").join("")}.png`;

  return (
    <div className="coinIcon">
      <img src={url} alt={name} />
    </div>
  );
}

export default AssetIcon;
