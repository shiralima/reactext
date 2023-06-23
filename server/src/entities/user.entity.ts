import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Message , Conversation} from './index';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Conversation, conversation => conversation.participant1)
    conversations1: Conversation[];

    @OneToMany(() => Conversation, conversation => conversation.participant2)
    conversations2: Conversation[];

    @OneToMany(() => Message, message => message.sender)
    sentMessages: Message[];

    @OneToMany(() => Message, message => message.recipient)
    receivedMessages: Message[];
}