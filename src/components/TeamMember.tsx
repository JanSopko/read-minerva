"use client";

import Image from "next/image";
import styles from "./TeamMember.module.css";

interface TeamMemberProps {
  name: string;
  position: string;
  photoUrl?: string;
  isEven?: boolean;
}

export default function TeamMember({ name, position, photoUrl, isEven = false }: TeamMemberProps) {
  // Generate initials from name
  const getInitials = (fullName: string): string => {
    const names = fullName.trim().split(" ");
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <div className={`${styles.teamMember} ${isEven ? styles.reverse : ""}`}>
      <div className={styles.photoContainer}>
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt={name}
            fill
            className={styles.photo}
            sizes="120px"
          />
        ) : (
          <div className={styles.initialsCircle}>
            <span className={styles.initials}>{initials}</span>
          </div>
        )}
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.position}>{position}</p>
      </div>
    </div>
  );
}

