import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './index';

@Entity()
export class Conversation {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.conversations1)
    @JoinColumn({ name: "participant1_id" })
    participant1: User;

    @ManyToOne(() => User, user => user.conversations2)
    @JoinColumn({ name: "participant2_id" })
    participant2: User;
}