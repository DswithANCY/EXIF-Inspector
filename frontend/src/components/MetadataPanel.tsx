import React from 'react';
import { 
  Camera, Calendar, Image as ImageIcon, MapPin, 
  Info, Maximize2, Compass, Cpu, X 
} from 'lucide-react';
import { ImageMetadata } from '../types';
import { formatFileSize } from './ImageGrid';

interface MetadataPanelProps {
  image: ImageMetadata | null;
  onClose: () => void;
}

export const MetadataPanel: React.FC<MetadataPanelProps> = ({ image, onClose }) => {
  if (!image) {
    return (
      <div className="glass-panel meta-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '320px', color: 'var(--text-muted)' }}>
        <Info size={36} style={{ marginBottom: '1rem' }} />
        <p style={{ fontSize: '0.95rem' }}>Select an image from the gallery to inspect EXIF metadata.</p>
      </div>
    );
  }

  const resolution = `${image.width} × ${image.height}`;
  const dateStr = image.date_taken 
    ? new Date(image.date_taken).toLocaleString(undefined, { 
        dateStyle: 'medium', 
        timeStyle: 'short' 
      }) 
    : 'N/A';

  const metadataItems = [
    { 
      label: 'Camera Make', 
      value: image.camera_make || 'N/A', 
      icon: <Cpu size={16} /> 
    },
    { 
      label: 'Camera Model', 
      value: image.camera_model || 'N/A', 
      icon: <Camera size={16} /> 
    },
    { 
      label: 'Date Taken', 
      value: dateStr, 
      icon: <Calendar size={16} /> 
    },
    { 
      label: 'Resolution', 
      value: resolution, 
      icon: <Maximize2 size={16} /> 
    },
    { 
      label: 'ISO Speed', 
      value: image.iso ? `ISO ${image.iso}` : 'N/A', 
      icon: <Info size={16} /> 
    },
    { 
      label: 'Aperture', 
      value: image.aperture ? `f/${image.aperture}` : 'N/A', 
      icon: <Camera size={16} /> 
    },
    { 
      label: 'Shutter Speed', 
      value: image.shutter_speed || 'N/A', 
      icon: <Info size={16} /> 
    },
    { 
      label: 'Focal Length', 
      value: image.focal_length ? `${image.focal_length} mm` : 'N/A', 
      icon: <Camera size={16} /> 
    },
    { 
      label: 'Latitude', 
      value: image.latitude != null ? `${image.latitude.toFixed(6)}°` : 'N/A', 
      icon: <MapPin size={16} /> 
    },
    { 
      label: 'Longitude', 
      value: image.longitude != null ? `${image.longitude.toFixed(6)}°` : 'N/A', 
      icon: <MapPin size={16} /> 
    },
    { 
      label: 'Altitude', 
      value: image.altitude != null ? `${image.altitude.toFixed(1)} m` : 'N/A', 
      icon: <Compass size={16} /> 
    },
    { 
      label: 'File Size', 
      value: formatFileSize(image.file_size), 
      icon: <ImageIcon size={16} /> 
    }
  ];

  return (
    <div className="glass-panel meta-panel">
      <div className="panel-header">
        <div className="panel-title-group">
          <div className="panel-title" style={{ maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={image.filename}>
            {image.filename}
          </div>
          <div className="panel-subtitle">{image.file_type}</div>
        </div>
        <button 
          onClick={onClose}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'var(--text-muted)', 
            cursor: 'pointer',
            padding: '4px',
            borderRadius: '50%'
          }}
          className="close-panel-btn"
          aria-label="Close details panel"
        >
          <X size={18} />
        </button>
      </div>

      <div className="meta-grid">
        {metadataItems.map((item, idx) => (
          <div className="meta-item" key={idx}>
            <div className="meta-item-icon">
              {item.icon}
            </div>
            <div className="meta-item-details">
              <span className="meta-item-label">{item.label}</span>
              <span className="meta-item-value" title={item.value.toString()}>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
