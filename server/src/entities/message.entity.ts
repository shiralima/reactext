import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User, Conversation } from './index';

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(() => Conversation, conversation => conversation.id)
    @JoinColumn({ name: "conversation_id" })
    conversation: Conversation;

    @ManyToOne(() => User, user => user.sentMessages)
    @JoinColumn({ name: "sender_id" })
    sender: User;

    @ManyToOne(() => User, user => user.receivedMessages)
    @JoinColumn({ name: "recipient_id" })
    recipient: User;
}
